import React from 'react';

import { default as MuiMenu } from '@mui/material/Menu';
import { default as MuiMenuItem } from '@mui/material/MenuItem';
import { startCase, camelCase } from 'lodash';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

import { Divider, Layout } from '@ruyyaan/shared/ui';
import { Icon, IconsList } from '@ruyyaan/shared/ui-icons';
import { usePermitRoles } from '@ruyyaan/rebiz/data-access-zeebe';
import { TextRegular, Avatar } from '@ruyyaan/rebiz/ui';
import { routes } from '@ruyyaan/rebiz/util-access';
import { useUser } from '@ruyyaan/rebiz/util-user';

import { NavigationRoute, NavigationRoutes } from './types';

function handleLogout() {
  signOut({ callbackUrl: routes.LOGIN.url });
}

type Props = {
  id: string;
  parentId: string;
  anchorEl: null | HTMLElement;
  onClose: () => void;
  routes: NavigationRoutes;
};
export const UserInfoMenu = ({ id, anchorEl, onClose, parentId, routes: UserRoutes }: Props) => {
  const open = !!anchorEl;
  const permitRoles = usePermitRoles();
  const [permitRolesString, setPermitRolesString] = React.useState('');

  const {
    data: { user },
  } = useUser();

  React.useEffect(() => {
    if (permitRoles.length > 0) {
      setPermitRolesString(permitRoles.map((role) => startCase(camelCase(role))).join(', '));
    }
  }, [permitRoles]);

  return (
    <MuiMenu
      id={id}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        'aria-labelledby': parentId,
      }}
    >
      <MuiMenuItem
        disableTouchRipple={true}
        disableRipple={true}
        sx={{
          gap: 1,
          '&:hover': { backgroundColor: 'transparent', cursor: 'default' },
        }}
      >
        <Avatar src={user?.image || undefined} />
        <Layout.BoxVertical spacing="none">
          <TextRegular weight={'bold'} variant={'normal'}>
            {user?.name}
          </TextRegular>
          <TextRegular weight={'light'} variant={'muted'}>
            {permitRolesString}
          </TextRegular>
        </Layout.BoxVertical>
      </MuiMenuItem>
      <Divider />
      {UserRoutes.map((route) => (
        <MenuItem key={route.text} route={route} onClick={onClose} />
      ))}
      <Divider />
      <MuiMenuItem sx={{ alignItems: 'center', gap: 1 }} onClick={handleLogout}>
        <Icon iconName={IconsList.logout} />
        <TextRegular>Logout</TextRegular>
      </MuiMenuItem>
    </MuiMenu>
  );
};

const MenuItem = ({ route, onClick }: { route: NavigationRoute; onClick: () => void }) => {
  return (
    <Link href={route.link} style={{ textDecoration: 'none' }} onClick={onClick}>
      <MuiMenuItem sx={{ alignItems: 'center', gap: 1 }}>
        <Icon iconName={route.icon} sx={{ fill: 'inherit' }} />
        <TextRegular>{route.text}</TextRegular>
      </MuiMenuItem>
    </Link>
  );
};
