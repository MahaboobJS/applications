import _ from 'lodash';

const isEmpty = (thing) => !thing || thing.length === 0;

export const addHelpers = (plop) => {
  plop.setPartial(
    'GeneratedFileHeader',
    `// ===============================================
// THIS IS A GENERATED FILE - Do NOT edit manually
//
// @see libs/work-permit/data-access-api/generator/README.md
//
// ===============================================`,
  );
  plop.setHelper('equals', function (value1, value2, options) {
    if (value1 === value2) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
  plop.setHelper('lowercase', function (value) {
    return value.toLowerCase();
  });
  // in keyName, out: KeyName
  plop.setHelper('prismaCase', function (value) {
    const prismaCase = value.charAt(0).toUpperCase() + value.slice(1);

    return prismaCase;
  });
  plop.setHelper('apiName', function (value) {
    const pascalCaseName = value.charAt(0).toUpperCase() + value.slice(1);

    return `${pascalCaseName}API`;
  });
  plop.setHelper('notequals', function (value1, value2, options) {
    if (value1 !== value2) {
      return options.fn(this);
    }
  });
  // in: [1,2], out: '{ 1, 2 }'
  plop.setHelper('params', function (params) {
    if (isEmpty(params)) {
      return '';
    }
    return `{ ${params.join(', ')} }`;
  });
  // in: [1,2], out: '1, 2'
  plop.setHelper('list', function (params) {
    if (!params) {
      return '';
    }
    return params.join(', ');
  });
  // in: ['id'], out: '.replace(":id", id)'
  plop.setHelper('urlReplace', function (params) {
    if (!params) {
      return '';
    }
    return params.map((item) => `.replace(':${item}', ${item})`).join('');
  });
  // in: [a, b] 'name', out: '{ a: name.a, b: name.b }'
  plop.setHelper('objectParams', function (params, name) {
    if (!params) {
      return '';
    }
    return `{ ${params.map((param) => `${param}: ${name}.${param}`).join(', ')} }`;
  });
  // in: ['id'], out: "{ id: Model['id`] }"
  plop.setHelper('typeList', function (params, domain) {
    if (isEmpty(params)) {
      return '';
    }

    return `{ ${params.map((param) => `${param}: ${_.upperFirst(domain)}['${param}']`).join(', ')} }`;
  });
  // in: ['id', 'name], out: "{ id, name }: { id: Model['id'], name: Model['name'] })"
  plop.setHelper('arguments', function (params, domain, modelTypes) {
    if (isEmpty(params)) {
      return '';
    }

    const paramList = `{ ${params.join(', ')} }`;
    const typeList = `{ ${params.map((param) => {
      const potentialCustomModelType = modelTypes[param]
        ? modelTypes[param]
        : param;
      return `${param}: ${_.upperFirst(domain)}['${potentialCustomModelType}']`;
    })} }`;

    return `${paramList}: ${typeList}`;
  });
  // in: ['id', 'name], out: "{ id, name }: { id: string, name: string })"
  plop.setHelper('argumentsManual', function (params, type) {
    if (isEmpty(params)) {
      return '';
    }

    return `{ ${params.join(', ')} }: { ${params.map((param) => `${param}: ${type}`)} }`;
  });
  // in: ['id', 'name'], out: ", id, name"
  plop.setHelper('prefixedList', function (params, quotes) {
    if (!params) {
      return '';
    }
    if (quotes) {
      return params.map((param) => `, '${param}'`);
    }
    return params.map((param) => `, ${param}`);
  });
};
