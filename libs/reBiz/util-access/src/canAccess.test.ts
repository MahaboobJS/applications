import { AccessRole } from '@prisma/client';

import { testWithMockedError } from '@ruyyaan/shared/util-test';
import { mockGenerateRoles } from '@ruyyaan/reBiz/util-test';

import { canAccess } from './canAccess';
import { AccessRequired } from './types';

describe('Access Utils', () => {
  const createOrgRole = mockGenerateRoles({
    AccessAction: ['ORG_CREATE'],
  });
  const membershipRole = mockGenerateRoles({
    AccessScope: 'ORG',
    scopeDomain: 'org1',
    AccessAction: ['ORG_MEMBER'],
  });
  const issuerRole = mockGenerateRoles({
    AccessScope: 'ORG',
    scopeDomain: 'org1',
    AccessAction: ['WORKFLOW_ISSUE_PERMIT'],
  });
  const siteCreateRole = mockGenerateRoles({
    AccessScope: 'ORG',
    scopeDomain: 'org1',
    AccessAction: ['SITE_CREATE'],
  });

  describe('canAccess', () => {
    testWithMockedError(
      'should return true when all required access Roles are present in the current access',
      () => {
        const requiredAccess: AccessRequired = {
          type: 'all',
          access: [membershipRole],
        };
        const currentAccess: AccessRole[] = [membershipRole, issuerRole];

        const result = canAccess(currentAccess, requiredAccess);

        expect(result).toBe(true);
        // expect(consoleMock).toHaveBeenCalledTimes(0);
      }
    );
    it('should return true when all required access is present in the current access when they have a complex list of current access, and that access is in the system domain', () => {
      const requiredAccess: AccessRequired = {
        type: 'all',
        access: [createOrgRole],
      };
      const currentAccess: AccessRole[] = [membershipRole, issuerRole, createOrgRole];

      const result = canAccess(currentAccess, requiredAccess);

      expect(result).toBe(true);
    });

    testWithMockedError(
      'should return false when at least one required access Role is missing from the current access',
      () => {
        const requiredAccess: AccessRequired = {
          type: 'all',
          access: [membershipRole],
        };
        const currentAccess: AccessRole[] = [issuerRole];

        const result = canAccess(currentAccess, requiredAccess);

        // expect(consoleMock).toHaveBeenCalled();
        expect(result).toBe(false);
      }
    );

    it('should return true when at least one (of many) required access Role is in the current access', () => {
      const requiredAccess: AccessRequired = {
        type: 'some',
        access: [membershipRole, siteCreateRole, issuerRole],
      };
      const currentAccess: AccessRole[] = [membershipRole];

      const result = canAccess(currentAccess, requiredAccess);

      expect(result).toBe(true);
    });

    it('should return true when at least one (of one) required access Role is present in the current access', () => {
      const requiredAccess: AccessRequired = {
        type: 'some',
        access: [membershipRole],
      };
      const currentAccess: AccessRole[] = [membershipRole];

      const result = canAccess(currentAccess, requiredAccess);

      expect(result).toBe(true);
    });

    testWithMockedError(
      'should return false when none of the required access Roles are present in the current access',
      () => {
        const requiredAccess: AccessRequired = {
          type: 'some',
          access: [membershipRole],
        };
        const currentAccess: AccessRole[] = [];

        const result = canAccess(currentAccess, requiredAccess);

        expect(result).toBe(false);

        // these are the errors we expect:
        // - failed to find access requirements
        // expect(consoleMock).toHaveBeenCalled();
      }
    );

    it('should return false when none of the required access Roles are present in the current access of many', () => {
      const requiredAccess: AccessRequired = {
        type: 'some',
        access: [membershipRole],
      };
      const currentAccess: AccessRole[] = [siteCreateRole, issuerRole];

      const result = canAccess(currentAccess, requiredAccess);

      expect(result).toBe(false);
    });

    it('should return true when not checking values', () => {
      const requiredAccess: AccessRequired = {
        type: 'some',
        access: [
          {
            AccessScope: 'ORG',
            scopeDomain: 'radomOrgId',
            AccessAction: ['SITE_CREATE'],
          },
        ],
        checkValue: false,
      };
      const currentAccess: AccessRole[] = [siteCreateRole, membershipRole];

      const result = canAccess(currentAccess, requiredAccess);

      expect(result).toBe(true);
    });

    it('should return true with good CUSTOM requests', () => {
      const requiredAccess: AccessRequired = {
        type: 'some',
        access: [
          {
            AccessScope: 'CUSTOM',
            scopeDomain: '',
            AccessAction: [],
            customAccessRequirements: () => true,
          },
        ],
      };
      const currentAccess: AccessRole[] = [];

      const result = canAccess(currentAccess, requiredAccess);

      expect(result).toBe(true);
    });

    it('should return true with bad CUSTOM requests', () => {
      const requiredAccess: AccessRequired = {
        type: 'some',
        access: [
          {
            AccessScope: 'CUSTOM',
            scopeDomain: '',
            AccessAction: [],
            customAccessRequirements: () => false,
          },
        ],
      };
      const currentAccess: AccessRole[] = [];

      const result = canAccess(currentAccess, requiredAccess);

      expect(result).toBe(false);
    });

    it('should test the data passed in for CUSTOM requests', () => {
      const requiredAccess: AccessRequired = {
        type: 'some',
        access: [
          {
            AccessScope: 'CUSTOM',
            scopeDomain: '',
            AccessAction: [],
            customAccessRequirements: (data: { ok: string }) => {
              return data.ok === 'test';
            },
          },
        ],
      };
      const currentAccess: AccessRole[] = [];

      const result = canAccess(currentAccess, requiredAccess, { ok: 'test' });

      expect(result).toBe(true);
    });
  });
});
