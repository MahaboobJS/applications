import { IconsList } from '@ruyyaan/shared/ui-icons';
import { Access } from '@ruyyaan/reBiz/util-access';

export type NavigationRoute = {
  text: string;
  icon: IconsList;
  link: string;
  accessFeatureFlag: keyof Access['mainMenu'];
};
export type NavigationRoutes = NavigationRoute[];
