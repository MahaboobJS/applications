import { AccessRole, AccessAction } from '@prisma/client';

import { hasOrgRole } from '../accessChecks/hasOrgRole';

import { Access } from './types';

export const getAdminRoleAccess = (usersRoles: AccessRole[]) => {
  type AdminAccess = NonNullable<Access['admin']>;
  const finalAccess: AdminAccess['roles'] = {};

  if (hasOrgRole(AccessAction.ASSIGN_ROLES, usersRoles)) {
    finalAccess.assignSystem = true;
  }

  return finalAccess;
};
