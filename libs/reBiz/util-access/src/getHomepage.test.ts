// Define AccessAction as a string type for MongoDB
type AccessAction = string;

import { mockGenerateRoles } from '@ruyyaan/reBiz/util-test';

import { getHomepage } from './getHomepage';
import { routes } from './getRoutes';

describe('getHomepage', () => {
  it('should return the correct homepage URL for admin role', () => {
    const homepage = getHomepage([mockGenerateRoles({ AccessAction: [AccessAction.ORG_CREATE] })]);
    expect(homepage).toBe(routes.ADMIN.url);
  });

  it('should return the correct homepage URL for workflow role receiver', () => {
    const homepage = getHomepage([
      mockGenerateRoles({
        AccessAction: [AccessAction.WORKFLOW_ADD_PRE_WORK_GAS_RESULTS],
      }),
    ]);
    expect(homepage).toBe(routes.GAS_TESTER.url);
  });

  it('should return the correct homepage URL for a nested role', () => {
    const homepage = getHomepage([
      mockGenerateRoles({
        // @ts-expect-error this is an intentionally unknown role for testing
        AccessAction: ['unknown role', AccessAction.WORKFLOW_ADD_PRE_WORK_GAS_RESULTS],
      }),
    ]);
    expect(homepage).toBe(routes.GAS_TESTER.url);
  });

  it('should return the correct homepage URL for workflow role receiver, if found anywhere', () => {
    const homepage = getHomepage([
      mockGenerateRoles({
        // @ts-expect-error this is intentionally bad for testing
        AccessAction: ['random action'],
      }),
      mockGenerateRoles({
        AccessAction: [AccessAction.WORKFLOW_ADD_PRE_WORK_GAS_RESULTS],
      }),
      mockGenerateRoles({
        AccessAction: [AccessAction.ORG_MEMBER],
      }),
    ]);
    expect(homepage).toBe(routes.GAS_TESTER.url);
  });

  it('should return the account no access URL if roles array is empty', () => {
    const homepage = getHomepage([]);
    expect(homepage).toContain(routes.PAGE_ERROR.url);
  });
});
