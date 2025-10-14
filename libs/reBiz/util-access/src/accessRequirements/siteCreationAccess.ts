import { AccessAction, AccessScope } from '@prisma/client';

import { AccessRoleWithCustom } from '../types';

export const siteCreationAccess: AccessRoleWithCustom = {
  AccessScope: AccessScope.ORG,
  scopeDomain: '',
  AccessAction: [AccessAction.SITE_CREATE],
};
