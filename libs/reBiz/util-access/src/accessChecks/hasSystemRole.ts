import { AccessAction, AccessScope } from '@prisma/client';

import { canAccess } from '../canAccess';
import { AccessRoleWithCustom } from '../types';

export const hasSystemRole = (role: AccessAction, usersRoles: AccessRoleWithCustom[]): boolean => {
  const roles = usersRoles;

  return canAccess(roles, {
    type: 'all',
    access: [
      {
        AccessScope: AccessScope.SYSTEM,
        scopeDomain: '',
        AccessAction: [role],
      },
    ],
  });
};
