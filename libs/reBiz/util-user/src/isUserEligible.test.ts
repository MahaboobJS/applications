import { isUserEligible } from './isUserEligible';

describe('isUserEligible', () => {
  it('should return true if user has all required roles', () => {
    const userAssignedRoles = ['admin', 'manager', 'employee'];
    const requiredRoles = ['admin', 'manager'];
    const result = isUserEligible({ userAssignedRoles, requiredRoles });
    expect(result).toBe(true);
  });

  it('should return false if user does not have any required roles', () => {
    const userAssignedRoles = ['employee'];
    const requiredRoles = ['admin', 'manager'];
    const result = isUserEligible({ userAssignedRoles, requiredRoles });
    expect(result).toBe(false);
  });

  it('should return true if user has at least one required role', () => {
    const userAssignedRoles = ['admin', 'employee'];
    const requiredRoles = ['admin', 'manager'];
    const result = isUserEligible({ userAssignedRoles, requiredRoles });
    expect(result).toBe(true);
  });

  it('should return false if userAssignedRoles is empty', () => {
    const userAssignedRoles: string[] = [];
    const requiredRoles = ['admin', 'manager'];
    const result = isUserEligible({ userAssignedRoles, requiredRoles });
    expect(result).toBe(false);
  });

  it('should return false if requiredRoles is empty', () => {
    const userAssignedRoles = ['admin', 'manager'];
    const requiredRoles: string[] = [];
    const result = isUserEligible({ userAssignedRoles, requiredRoles });
    expect(result).toBe(false);
  });

  it('should return false if both userAssignedRoles and requiredRoles are empty', () => {
    const userAssignedRoles: string[] = [];
    const requiredRoles: string[] = [];
    const result = isUserEligible({ userAssignedRoles, requiredRoles });
    expect(result).toBe(false);
  });
});
