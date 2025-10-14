import { AccessAction, AccessScope } from '@prisma/client';

import { mockGenerateRoles } from '@ruyyaan/reBiz/util-test';

import { getPermitAccess } from './getPermitAccess';

describe('getPermitAccess', () => {
  test('getPermitAccess', () => {
    const userAssignedRoles = [
      mockGenerateRoles({
        AccessScope: AccessScope.ORG,
        AccessAction: [AccessAction.WORKFLOW_READ_PERMIT],
      }),
    ];
    const permitAccess = getPermitAccess(userAssignedRoles);

    expect(permitAccess).toMatchObject({
      read: true,
      create: false,
      interimWorkGasTester: false,
      gasTester: false,
      issuer: false,
      postWorkGasTester: false,
      preWorkGasTester: false,
      receiver: false,
    });
  });

  test('returns the correct permit access for a user with who can create permit', () => {
    const userAssignedRoles = [
      mockGenerateRoles({
        AccessScope: AccessScope.ORG,
        AccessAction: [AccessAction.WORKFLOW_CREATE_PERMIT],
      }),
    ];
    const permitAccess = getPermitAccess(userAssignedRoles);

    expect(permitAccess).toMatchObject({
      read: false,
      create: true,
      interimWorkGasTester: false,
      issuer: true,
      gasTester: false,
      postWorkGasTester: false,
      preWorkGasTester: false,
      receiver: true,
    });
  });
});
