import { IconsList } from '@ruyyaan/shared/ui-icons';
import { routes } from '@ruyyaan/rebiz/util-access';

import { NavigationRoutes } from './lib/types';

export const sideNavigationRoutes: NavigationRoutes = [
  {
    text: 'Rebiz',
    icon: IconsList.assignment,
    link: routes.PERMIT_SCHEDULE.url,
    accessFeatureFlag: 'permit',
  },
  {
    text: 'Gas Testing',
    icon: IconsList.speed,
    link: routes.GAS_TESTER.url,
    accessFeatureFlag: 'gastester',
  },
  {
    text: 'Notifications',
    icon: IconsList.notification,
    link: routes.NOTIFICATIONS.url,
    accessFeatureFlag: 'notifications',
  },
  {
    text: 'Admin',
    icon: IconsList.user,
    link: routes.ADMIN.url,
    accessFeatureFlag: 'admin',
  },
  {
    text: 'Permit Monitoring',
    icon: IconsList.monitoring,
    link: routes.PERMIT_MONITORING.url,
    accessFeatureFlag: 'monitoring',
  },
];

export const userInfoRoutes: NavigationRoutes = [
  {
    text: 'Profile',
    icon: IconsList.user,
    link: routes.USER_PROFILE.url,
    accessFeatureFlag: 'profile',
  },
  {
    text: 'My Rebizs',
    icon: IconsList.list,
    link: routes.PERMIT_SCHEDULE.url,
    accessFeatureFlag: 'myPermits',
  },
];
