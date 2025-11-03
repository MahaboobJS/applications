import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ts from 'typescript';
import { addHelpers } from './plopHelpers.mjs';

// Convert the module URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiDir = path.join(__dirname, '../src');

const APP_API_PATH = path.join(
  __dirname,
  '../../../../apps/work-permit/app/api/v1',
);

// eventually we might want to use just one of these lists
// but this is a useful setup while we build this generator feature
// and slowly roll it out
const ignoreDomainFolderList = ['gcpBucket', 'files'];
const allowDomainFoldersList = [
  'iam',
  'org',
  'workflowType',
  'location',
  'user',
  'workflowInstance',
];

const cleanAndSplitArray = (items) => {
  return items
    .trim()
    .split(' ')
    .map((item) => item.trim());
};
function replaceDynamicParams(route) {
  return route.replace(/\[(\w+)\]/g, ':$1');
}
function getListOfDynamicParams(route) {
  return (route.match(/\[(\w+)\]/g) || []).map((match) => match.slice(1, -1));
}
const domainFolders = fs.readdirSync(apiDir).filter((possibleFolder) => {
  const isFile = possibleFolder.includes('.');
  if (isFile) {
    return false;
  }

  if (!allowDomainFoldersList.includes(possibleFolder)) {
    return false;
  }

  if (ignoreDomainFolderList.includes(possibleFolder)) {
    return false;
  }

  return true;
});

const filesToGenerate = domainFolders.reduce((results, domain) => {
  const endpoints = fs
    .readdirSync(apiDir + '/' + domain + '/api')
    .filter((possibleFile) => {
      return possibleFile.endsWith('.ts');
    });

  // read the JSDoc from the endpoint files
  // and figure out what we need to generate
  const endpointsInfo = endpoints.map((name) => {
    console.log('- Processing:', name);
    const filePath = path.join(apiDir, domain, 'api', name);
    const sourceFile = ts.createSourceFile(
      filePath,
      fs.readFileSync(filePath, 'utf8'),
      ts.ScriptTarget.Latest,
      true,
    );

    let route = '';
    let verb = '';
    let invalidate = '';
    let key = 'all';
    const replacements = {};
    let keyExtended = [];
    let generateQuery = true;
    let generateInvalidation = false;
    let forceQuery = false;
    let forceMutation = false;
    ts.forEachChild(sourceFile, (node) => {
      const skipList = ['EndpointData', 'EndpointParams'];
      if (skipList.includes(node.name?.escapedText)) {
        return;
      }
      if (node.name?.escapedText === undefined) {
        return;
      }

      if (ts.isFunctionDeclaration(node) && node.jsDoc) {
        node.jsDoc.forEach((jsDocNode) => {
          // extract @route from jsDoc
          const routeTag = jsDocNode.tags.find(
            (tag) => tag.tagName.escapedText === 'route',
          );
          // console.log('routeTag', routeTag.getText());
          const routeLine = routeTag.getText();
          const routeInfo = cleanAndSplitArray(routeLine);
          if (routeInfo.length < 3) {
            console.log(`Error, bad @route string: "${routeLine}"`);
            return;
          }
          const [_tag, routeVerb, routePath] = routeInfo;
          verb = routeVerb;
          route = routePath;

          // extract @key from jsDoc
          const keyTag = jsDocNode.tags.find(
            (tag) => tag.tagName.escapedText === 'key',
          );
          if (keyTag) {
            const keyInfo = cleanAndSplitArray(keyTag.getText());
            const [_tag, queryKey, ...extendedQueryKey] = keyInfo;
            key = queryKey;
            // this is the case when there is no matching, and it reads from the next line
            // so we ignore those as it means there is no extended key set
            if (!extendedQueryKey.includes('*')) {
              keyExtended = extendedQueryKey;
            }
          }

          // extract @generateQuery from jsDoc
          const generateQueryTag = jsDocNode.tags.find(
            (tag) => tag.tagName.escapedText === 'generateQuery',
          );
          if (generateQueryTag) {
            const generateQueryInfo = cleanAndSplitArray(
              generateQueryTag.getText(),
            );
            const [_tag, state] = generateQueryInfo;
            if (state === 'false') {
              generateQuery = false;
            }
          }

          // extract @forceQuery from jsDoc
          const forceQueryTag = jsDocNode.tags.find(
            (tag) => tag.tagName.escapedText === 'forceQuery',
          );
          if (forceQueryTag) {
            forceQuery = true;
          }

          // extract @generateInvalidation from jsDoc
          const generateInvalidationTag = jsDocNode.tags.find(
            (tag) => tag.tagName.escapedText === 'generateInvalidation',
          );
          if (generateInvalidationTag) {
            const tagInfo = cleanAndSplitArray(
              generateInvalidationTag.getText(),
            );
            const [_tag, state] = tagInfo;
            if (state === 'true') {
              generateInvalidation = true;
            }
          }

          // extract @invalidate from jsDoc
          const generateInvalidateTag = jsDocNode.tags.find(
            (tag) => tag.tagName.escapedText === 'invalidate',
          );
          if (generateInvalidateTag) {
            const tagInfo = cleanAndSplitArray(generateInvalidateTag.getText());
            const [_tag, invalidateKey] = tagInfo;
            invalidate = invalidateKey;
          }

          // extract @replace from jsDoc
          const replaceTags = jsDocNode.tags.filter(
            (tag) => tag.tagName.escapedText === 'replace',
          );
          if (replaceTags.length > 0) {
            replaceTags.forEach((replaceTag) => {
              const tagInfo = cleanAndSplitArray(replaceTag.getText());
              const [_tag, oldKey, newKey] = tagInfo;
              replacements[oldKey] = newKey;
            });
          }
        });
      }
    });

    let isQuery = verb === 'GET';
    let isMutation = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(verb);

    if (forceQuery) {
      isQuery = true;
      isMutation = false;
    }

    if (isMutation) {
      key = '';
    }

    return {
      name: name.replace('.ts', ''),
      verb,
      // for defining where to put the handler
      route,
      // for calling that above handler
      urlRoute: replaceDynamicParams(route),
      dynamicParams: getListOfDynamicParams(route),
      modelReplacements: replacements,
      key,
      keyExtended,
      invalidate, // key to invalidate
      isQuery,
      isMutation,
      generateQuery,
      generateInvalidation,
    };
  });

  // this will validate and group endpoints by route
  // eg: { 'iam/access': [{verb: 'GET', name: 'getAccess' }] }
  const oneDomainEndpoints = endpointsInfo.reduce(
    (results, endpoint) => {
      if (!endpoint.route || !endpoint.verb) {
        console.log(
          `API handler found for '${endpoint.name}' without route, skipping.`,
          endpoint,
        );
        return results;
      }

      // prepare the results object if this is the first pass
      if (!results.endpoints[endpoint.route]) {
        results.endpoints[endpoint.route] = [];
      }

      // the reason we made these is because
      // it is handy during generation if we have separate lists
      // of queries and mutations rather than having to filter
      // the endpoints again, eg: for the index.ts file exports

      endpoint.writeQuery = endpoint.isQuery && endpoint.generateQuery;
      endpoint.writeMutation = endpoint.isMutation && endpoint.generateQuery;

      const queryChanges = endpoint.isQuery ? [endpoint.name] : [];
      const mutationChanges = endpoint.isMutation ? [endpoint.name] : [];

      const key = {
        extendedKeyPath: endpoint.keyExtended,
        dynamicParts: endpoint.dynamicParams,
        modelReplacements: endpoint.modelReplacements,
      };

      let keys = results.keys;
      // only update keys if there is a key set
      // else we know its for a mutation that does not have a key
      if (endpoint.key) {
        keys = {
          ...results.keys,
          [endpoint.key]: key,
        };
      }

      let invalidations = results.invalidations;
      if (endpoint.generateInvalidation) {
        invalidations = {
          ...results.invalidations,
          // since keys are not unique, we want to enable this if it is not set
          // not disable it if it is set
          [endpoint.key]:
            results.invalidations[endpoint.key] ||
            endpoint.generateInvalidation,
        };
      }

      return {
        ...results,
        endpoints: {
          ...results.endpoints,
          // we key these by route to make the template generation easier
          [endpoint.route]: [...results.endpoints[endpoint.route], endpoint],
        },
        keys,
        invalidations,
        hasDynamicKeys:
          endpoint.dynamicParams.length > 0 ? true : results.hasDynamicKeys,
        queries: [...results.queries, ...queryChanges],
        mutations: [...results.mutations, ...mutationChanges],
      };
    },
    {
      domain,
      hasDynamicKeys: false,
      endpoints: {},
      queries: [],
      mutations: [],
      keys: {},
      invalidations: {},
    },
  );

  return [...results, oneDomainEndpoints];
}, []);

// console.log('filesToGenerate', filesToGenerate);

/**
 * We use plop to generate the files from templates
 */
export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  addHelpers(plop);

  const actions = [];

  console.log('filesToGenerate', JSON.stringify(filesToGenerate, null, 2));

  filesToGenerate.forEach(
    ({
      domain,
      endpoints,
      queries,
      mutations,
      keys,
      hasDynamicKeys,
      invalidations,
    }) => {
      const routesFolders = Object.keys(endpoints);

      // we add these outside of the endpoints loop because it will allow us to
      // group potential duplicates together, rather than always having
      // just one per endpoint
      actions.push({
        type: 'add',
        force: true,
        path: `../src/${domain}/queries/keys.ts`,
        templateFile: 'templates/keys.hbs',
        data: { domain, keys, hasDynamicKeys },
      });

      Object.entries(invalidations).forEach(([key, enabled]) => {
        if (enabled) {
          const pascalCaseKey = key.charAt(0).toUpperCase() + key.slice(1);
          actions.push({
            type: 'add',
            force: true,
            path: `../src/${domain}/queries/useInvalidate${pascalCaseKey}.ts`,
            templateFile: 'templates/invalidate.hbs',
            data: { domain, key, dynamicParts: keys[key].dynamicParts },
          });
        }
      });

      routesFolders.forEach((route) => {
        // this is the file in /apps/api/v1/xxx
        actions.push({
          type: 'add',
          force: true,
          path: `${APP_API_PATH}/${route}/route.ts`,
          templateFile: 'templates/handlerImport.hbs',
          data: { domain },
        });

        endpoints[route].forEach((endpoint) => {
          const pascalCaseName =
            endpoint.name.charAt(0).toUpperCase() + endpoint.name.slice(1);

          if (endpoint.writeQuery) {
            actions.push({
              type: 'add',
              force: true,
              path: `../src/${domain}/queries/use${pascalCaseName}Query.ts`,
              templateFile: 'templates/query.hbs',
              data: { domain, endpoint },
            });
          }

          if (endpoint.writeMutation) {
            actions.push({
              type: 'add',
              force: true,
              path: `../src/${domain}/mutations/use${pascalCaseName}Mutation.ts`,
              templateFile: 'templates/mutation.hbs',
              data: { domain, endpoint },
            });
          }

          if (endpoint.writeMutation || endpoint.writeQuery) {
            actions.push({
              type: 'add',
              force: true,
              path: `../src/${domain}/__mocks/mock${pascalCaseName}.ts`,
              templateFile: 'templates/mockHandler.hbs',
              data: { domain, endpoint },
            });
          }

          // this is the file in /apps/api/v1/xxx
          actions.push({
            type: 'append',
            path: `${APP_API_PATH}/${route}/route.ts`,
            pattern: /$/g, // This regex matches the end of the file
            templateFile: 'templates/handler.hbs',
            data: { domain, endpoint },
          });
        });
      });

      // this is the file in /libs/data-access-api/src/domain/index.ts
      const allHandlersInThisDomain = routesFolders
        .flatMap((route) => endpoints[route].map((endpoint) => endpoint.name))
        .sort((a, b) => a.localeCompare(b));

      actions.push({
        type: 'add',
        force: true,
        path: `../src/${domain}/index.ts`,
        templateFile: 'templates/barrelExport.hbs',
        data: {
          domain,
          endpoints: allHandlersInThisDomain,
          queries: queries.sort((a, b) => a.localeCompare(b)),
          mutations: mutations.sort((a, b) => a.localeCompare(b)),
        },
      });
    },
  );

  plop.setGenerator('Rebiz API Access Generator', {
    description: 'Generate SDK',
    prompts: [],
    actions,
  });
}
