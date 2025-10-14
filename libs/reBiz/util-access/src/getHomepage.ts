import { AccessAction, AccessRole } from '@prisma/client';

import { routes } from './getRoutes';

const roleDefaultRouteMap: Record<string, string> = {
  [AccessAction.ORG_CREATE]: routes.ADMIN.url,
  [AccessAction.SITE_CREATE]: routes.ADMIN.url,
  [AccessAction.WORKFLOW_READ_PERMIT]: routes.PERMIT_SCHEDULE.url,
  [AccessAction.WORKFLOW_ADD_PRE_WORK_GAS_RESULTS]: routes.GAS_TESTER.url,
};

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
