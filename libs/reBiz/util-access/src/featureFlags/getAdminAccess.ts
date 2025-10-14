import { AccessRole, AccessAction } from '@prisma/client';

import { hasOrgRole } from '../accessChecks/hasOrgRole';
import { hasSystemRole } from '../accessChecks/hasSystemRole';

import { getAdminRoleAccess } from './getAdminRoleAccess';
import { Access } from './types';

export const getAdminAccess = (usersRoles: AccessRole[]) => {
  const finalAccess: Access['admin'] = {
    tabs: {},
  };

  finalAccess.tabs.dashboard = true;

  // ORG LEVEL
  if (hasOrgRole(AccessAction.ASSIGN_WORKFLOW_ROLES, usersRoles)) {
    finalAccess.tabs.roles = true;
  }
  if (hasOrgRole(AccessAction.ASSIGN_ROLES, usersRoles)) {
    finalAccess.tabs.roles = true;
  }
  if (hasOrgRole(AccessAction.SITE_CREATE, usersRoles)) {
    finalAccess.tabs.locations = true;
  }
  if (hasOrgRole(AccessAction.ORG_CREATE, usersRoles)) {
    finalAccess.tabs.organizations = true;
  }
  if (hasOrgRole(AccessAction.ORG_USERS_MANAGE, usersRoles)) {
    finalAccess.tabs.users = true;
  }

  // GLOBAL LEVEL
  if (hasSystemRole(AccessAction.ORG_CREATE, usersRoles)) {
    finalAccess.tabs.allOrganizations = true;
    finalAccess.tabs.allUsers = true;
    finalAccess.tabs.allUsersUnassigned = true;
    finalAccess.tabs.docs = true;
  }

  finalAccess.roles = getAdminRoleAccess(usersRoles);

  return finalAccess;
};
