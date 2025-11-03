import { AccessRole } from './types';

// Define AccessAction as a string type for MongoDB
type AccessAction = string;

import { routes } from './getRoutes';

const roleDefaultRouteMap: Record<string, string> = {};

/**
 * Get homepage
 *
 * Choose the page to redirect to after login - based on the user's roles
 *
 * This tries to find the first role that matches the above route map
 *
 */
export const getHomepage = (roles: AccessRole[]): string => {
  if (roles.length === 0) {
    // console.error('No roles were found for this user');
    return routes.ACCOUNT_NO_ACCESS.url;
  }

  const foundHomepageRoute = roles.reduce<string | undefined>((routeMatched, role) => {
    if (routeMatched) {
      return routeMatched;
    }

    const matchingAction = role.AccessAction.find((action) => roleDefaultRouteMap[action]);

    return matchingAction ? roleDefaultRouteMap[matchingAction] : routeMatched;
  }, undefined);

  if (foundHomepageRoute) {
    return foundHomepageRoute;
  }

  return `${routes.PAGE_ERROR.url}/4000`;
};
