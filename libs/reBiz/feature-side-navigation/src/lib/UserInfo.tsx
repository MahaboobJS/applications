import * as React from 'react';

import { Button, useTheme } from '@mui/material';

import { Layout } from '@ruyyaan/shared/ui';
import { TextMedium, Avatar } from '@ruyyaan/reBiz/ui';
import { useUser } from '@ruyyaan/reBiz/util-user';

import { NavigationRoutes } from './types';
import { UserInfoMenu } from './UserInfoMenu';

export const UserInfo = ({ routes, open }: { routes: NavigationRoutes; open: boolean }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();

  const { data, status, error } = useUser();

  const user = data?.user;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!error && !user?.name) {
    console.warn('User name not found, hiding profile bar', { status });
    return null;
  }

  return (
    <Layout.BoxHorizontal
      sx={{
        overflow: 'hidden',
        color: 'inherit',
        px: 1,
        my: 2,
      }}
    >
      <Layout.BoxHorizontal spacing="none" sx={{ alignItems: 'center' }}>
        <Button
          id="user-avatar"
          aria-haspopup="true"
          aria-controls={anchorEl ? 'user-info-menu' : undefined}
          aria-expanded={anchorEl ? 'true' : undefined}
          onClick={handleClick}
          sx={{ p: 0, m: 0, justifyContent: 'unset', minWidth: 48 }}
        >
          <Avatar
            src={user?.image || undefined}
            sx={{
              border: `1px solid ${theme.palette.primary.contrastText}`,
              width: 38,
              height: 38,
            }}
          />
        </Button>
        <UserInfoMenu
          id={'user-info-menu'}
          parentId={'user-info-avatar'}
          anchorEl={anchorEl}
          onClose={handleClose}
          routes={routes}
        />
        <Layout.BoxVertical
          sx={{
            gap: 0,
            opacity: open ? 1 : 0,
            overflow: 'hidden',
          }}
        >
          <TextMedium variant={'inverted'}>{user.name}</TextMedium>
        </Layout.BoxVertical>
      </Layout.BoxHorizontal>
    </Layout.BoxHorizontal>
  );
};
