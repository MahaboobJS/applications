import { AccessAction, AccessScope } from '@prisma/client';

import { canAccess } from '../canAccess';
import { AccessRoleWithCustom } from '../types';

export const hasOrgRole = (role: AccessAction, usersRoles: AccessRoleWithCustom[]): boolean => {
  const roles = usersRoles;

  // perhaps we can even expand with this:
  // if (!roles) {
  //     roles = await getUserSession()
  // }

  return canAccess(roles, {
    type: 'all',
    access: [
      {
        AccessScope: AccessScope.ORG,
        scopeDomain: '',
        AccessAction: [role],
      },
    ],
  });
};
