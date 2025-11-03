'use client';

import * as React from 'react';

import { usePathname } from 'next/navigation';

import List from '@mui/material/List';
import Skeleton from '@mui/material/Skeleton';

import { useGetAccessQuery } from '@ruyyaan/rebiz/data-access-api';
import { Layout } from '@ruyyaan/shared/ui';

import { sideNavigationRoutes, userInfoRoutes } from '../tabs';
import { SideNavigationDrawer } from './elements';
import Header from './Header';
import { ListItem } from './ListItem';
import { NavigationRoutes } from './types';
import { UserInfo } from './UserInfo';

export const SideNavigation = () => {
  const [open, setOpen] = React.useState(false);

  const sideNavigationUpdatedValue = (isOpened: boolean) => {
    setOpen(isOpened);
  };

  return (
    <SideNavigationDrawer variant="permanent" open={open}>
      <Header
        handleSideNavigationUpdate={sideNavigationUpdatedValue}
        open={open}
        handleToggleSidebar={() => setOpen(!open)}
      />
      <MainNavigationLinks routes={sideNavigationRoutes} open={open} />
      <Layout.Expander />
      <UserInfo routes={userInfoRoutes} open={open} />
    </SideNavigationDrawer>
  );
};

const loadingSx = { mx: 1, py: 3 };
function MainNavigationLinks({
  routes,
  open,
}: Readonly<{ routes: NavigationRoutes; open: boolean }>) {
  const currentPath = usePathname();
  const { data: access, isLoading } = useGetAccessQuery();

  if (isLoading) {
    return (
      <List>
        <Skeleton sx={loadingSx} />
        <Skeleton sx={loadingSx} />
        <Skeleton sx={loadingSx} />
      </List>
    );
  }

  if (access && 'error' in access) {
    return <List>Error!</List>;
  }

  return (
    <List>
      {routes.map((route, index) => {
        const hasNoAccess = !access?.mainMenu?.[route.accessFeatureFlag];
        if (hasNoAccess) {
          return null;
        }

        return (
          <ListItem
            key={route.link || index}
            open={open}
            text={route.text}
            iconName={route.icon}
            link={route.link}
            isActive={currentPath === route.link}
          />
        );
      })}
    </List>
  );
}
