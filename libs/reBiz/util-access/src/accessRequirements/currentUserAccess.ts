import { Session } from '@prisma/client';

import { castUnknown } from '@ruyyaan/shared/util-errors';

import { AccessRoleWithCustom } from '../types';

type PossibleSession = { session: Session };
type PossibleContext = { context: { params: { userId: string } } };

export const currentUserAccess: AccessRoleWithCustom = {
  AccessScope: 'CUSTOM',
  customAccessRequirements: (args: unknown) => {
    const session = castUnknown<PossibleSession>(args, 'session');
    const context = castUnknown<PossibleContext>(args, 'context');

    if (session.id === context.params.userId) {
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
