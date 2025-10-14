import { AccessRole, AccessAction, AccessScope } from '@prisma/client';

import { canAccess } from '../canAccess';
import { AccessRequired } from '../types';

import { Access } from './types';

const getOrgCreationAccess = (usersRoles: AccessRole[]) => {
  const accessRequired: AccessRequired = {
    type: 'some',
    access: [
      {
        AccessScope: AccessScope.SYSTEM,
        scopeDomain: '',
        AccessAction: [AccessAction.ORG_CREATE],
      },
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.ORG_CREATE],
      },
    ],
  };

  return canAccess(usersRoles, accessRequired);
};

const getOrgWorkflowManagementAccess = (usersRoles: AccessRole[]) => {
  const accessRequired: AccessRequired = {
    type: 'some',
    access: [
      {
        AccessScope: AccessScope.SYSTEM,
        scopeDomain: '',
        AccessAction: [AccessAction.ORG_CREATE],
      },
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.MANAGE_WORKFLOWS],
      },
    ],
  };

  return canAccess(usersRoles, accessRequired);
};

export const getOrgAccess = (usersRoles: AccessRole[]): Access['org'] => {
  const finalAccess: Record<string, boolean> = {};

  const canCreate = getOrgCreationAccess(usersRoles);
  // we do this to not expose all the available actions
  if (canCreate) {
    finalAccess.create = canCreate;
  }

  const canManageWorkflows = getOrgWorkflowManagementAccess(usersRoles);
  // we do this to not expose all the available actions
  if (canManageWorkflows) {
    finalAccess.manageWorkflows = canManageWorkflows;
  }

  return finalAccess;
};
