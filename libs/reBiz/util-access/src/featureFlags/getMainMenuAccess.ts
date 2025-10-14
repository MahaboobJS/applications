import { AccessRole, AccessAction, AccessScope } from '@prisma/client';

import { canAccess } from '../canAccess';

import { Access } from './types';

export function getMainMenuAccess(usersRoles: AccessRole[]) {
  const access: Access['mainMenu'] = {
    notifications: false,
    profile: true,
    myPermits: true,
    monitoring: true,
  };

  access.permit = canAccess(usersRoles, {
    type: 'some',
    access: [
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.WORKFLOW_READ_PERMIT],
      },
    ],
  });

  access.gastester = canAccess(usersRoles, {
    type: 'some',
    access: [
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.WORKFLOW_ROLE_PRE_WORK_GAS_TESTER],
      },
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.WORKFLOW_ROLE_INTERIM_WORK_GAS_TESTER],
      },
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.WORKFLOW_ROLE_POST_WORK_GAS_TESTER],
      },
    ],
  });

  access.admin = canAccess(usersRoles, {
    type: 'some',
    access: [
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.ORG_CREATE],
      },
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.MANAGE_ROLES],
      },
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.SITE_CREATE],
      },
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.ASSIGN_ROLES],
      },
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.MANAGE_WORKFLOWS],
      },
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.ASSIGN_WORKFLOW_ROLES],
      },
      {
        AccessScope: AccessScope.SYSTEM,
        scopeDomain: '',
        AccessAction: [AccessAction.ORG_CREATE],
      },
      {
        AccessScope: AccessScope.SYSTEM,
        scopeDomain: '',
        AccessAction: [AccessAction.MANAGE_ROLES],
      },
      {
        AccessScope: AccessScope.SYSTEM,
        scopeDomain: '',
        AccessAction: [AccessAction.ORG_USERS_MANAGE],
      },
    ],
  });

  access.monitoring = canAccess(usersRoles, {
    type: 'some',
    access: [
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [AccessAction.PERMIT_MONITORING],
      },
    ],
  });

  return access;
}
