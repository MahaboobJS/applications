export const isUserEligible = ({
  userAssignedRoles,
  requiredRoles,
}: {
  userAssignedRoles: string[];
  requiredRoles: string[];
}): boolean => {
  return requiredRoles.some((role) => userAssignedRoles?.includes(role));
};
