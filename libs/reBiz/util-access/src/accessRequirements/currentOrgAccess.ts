import { castUnknown } from '@ruyyaan/shared/util-errors';

import { AccessRoleWithCustom } from '../types';

type PossibleSession = { session: { user: { currentOrg: string } } };
type PossibleContext = { context: { params: { id: string } } };

export const currentOrgAccess: AccessRoleWithCustom = {
  AccessScope: 'CUSTOM',
  customAccessRequirements: (args: unknown) => {
    const session = castUnknown<PossibleSession>(args, 'session');
    const context = castUnknown<PossibleContext>(args, 'context');

    if (session.user.currentOrg === context.params.id) {
      return true;
    }

    return false;
  },

  // #
  // not used, need to fix type and remove these:
  // #
  AccessAction: [],
  scopeDomain: '',
};
