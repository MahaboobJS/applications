import { AccessScope } from '@prisma/client';

import { AccessRequired, AccessRoleWithCustom } from './types';

const DEBUG = false;

const compareAccess = (
  current: AccessRoleWithCustom,
  required: AccessRoleWithCustom,
  checkDomain = true,
  checkSome = false
): { result: boolean; error?: string } => {
  const scopeMatches = current.AccessScope.toString() === required.AccessScope.toString();

  if (!scopeMatches) {
    return {
      result: false,
      error: `Scope does not match: ${current.AccessScope.toString()} !== ${required.AccessScope.toString()}`,
    };
  }

  const actionsNotMatched = checkSome
    ? required.AccessAction.some((requireAction) => current.AccessAction.includes(requireAction))
    : required.AccessAction.every((requireAction) => current.AccessAction.includes(requireAction));

  if (!actionsNotMatched) {
    return {
      result: false,
      error: `Actions not found: ${required.AccessAction.map((action) =>
        action ? action.toString() : 'Unknown action'
      )}`,
    };
  }

  if (checkDomain) {
    const domainMatches = current.scopeDomain === required.scopeDomain;

    if (!domainMatches) {
      return {
        result: false,
        error: `Domain does not match: ${current.scopeDomain.toString()} !== ${required.scopeDomain.toString()}`,
      };
    }
  }

  return { result: true };
};

/**
 * Can Access
 *
 * @param extraData - extra data to be passed to the customAccessRequirements function
 *
 *
 *
 *
 * Usage example:
 *
 *
 *   const AccessRole = {
 *     action: 'ORG_MEMBERSHIP',
 *     domain: 'ORG',
 *     value: 'currentOrgId',
 *   };
 *
 *   const accessRequired: AccessRequired = {
 *     type: 'all',
 *     access: [AccessRole],
 *   };
 *
 *   canAccess([AccessRole], accessRequired);
 *
 */
export const canAccess = (
  currentAccess: AccessRoleWithCustom[],
  requiredAccess: AccessRequired,
  extraData?: unknown
) => {
  const defaultMergedRoles: [AccessRoleWithCustom, AccessRoleWithCustom] = [
    {
      // id: '1',
      // name: 'Org Roles',
      AccessScope: 'ORG',
      scopeDomain: '',
      AccessAction: [],
    },
    {
      // id : 'System roles',
      AccessScope: 'SYSTEM',
      scopeDomain: '',
      AccessAction: [],
    },
  ];

  // merge all org 'access actions' from the users roles
  // since we only ever get the current orgs roles for a user
  // thus we can put them all into one array, as other orgs roles will not be present here
  const mergedRoles: [AccessRoleWithCustom, AccessRoleWithCustom] = currentAccess.reduce(
    (result, role) => {
      if (role.AccessScope.toString() === AccessScope.ORG.toString()) {
        return [
          {
            ...result[0],
            AccessAction: [...result[0].AccessAction, ...role.AccessAction],
          },
          result[1],
        ];
      }

      if (role.AccessScope.toString() === AccessScope.SYSTEM.toString()) {
        return [
          result[0],
          {
            ...result[1],
            AccessAction: [...result[1].AccessAction, ...role.AccessAction],
          },
        ];
      }
      return result;
    },
    defaultMergedRoles
  );

  // console.log('Merged Roles:', mergedRoles);

  if (requiredAccess.type === 'all') {
    const errors: [string, AccessRoleWithCustom][] = [];
    // Check if all required access lists are present in the current access
    const allCheckResult = requiredAccess.access.every((required) => {
      return mergedRoles.some((current) => {
        // console.log('Checking: ', { current, required });
        const { result, error } = compareAccess(current, required, false);

        if (!result && error) {
          errors.push([error, required]);
        }

        return result;
      });
    });

    if (allCheckResult === false) {
      DEBUG &&
        console.log('Users access that caused failure:', JSON.stringify(mergedRoles, null, 2));
      errors.forEach(([message, requiredButMissing]) => {
        DEBUG && console.log('Required access:', requiredButMissing);
        DEBUG && console.error(message);
      });
    }

    return allCheckResult;
  }

  if (requiredAccess.type === 'some') {
    // Check if at least one required access entitlement is present in the current access
    const someResult = requiredAccess.access.some((required) => {
      if (required.AccessScope === 'CUSTOM') {
        return required.customAccessRequirements(extraData);
      }
      return mergedRoles.some((current) => {
        const { result } = compareAccess(current, required, false, true);

        return result;
      });
    });

    if (someResult === false) {
      DEBUG && console.error('Failed to find (some) required access:', requiredAccess);
    }

    return someResult;
  }

  DEBUG && console.error('No type was found for:', requiredAccess);
  return false;
};
