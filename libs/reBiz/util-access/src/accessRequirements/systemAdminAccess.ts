import { AccessAction, AccessScope } from '@prisma/client';

import { AccessRoleWithCustom } from '../types';

export const systemAdminAccess: AccessRoleWithCustom = {
  AccessScope: AccessScope.SYSTEM,
  scopeDomain: '',
  AccessAction: [AccessAction.ORG_CREATE],
};
