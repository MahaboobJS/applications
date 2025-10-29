import * as React from 'react';

import { IconButton } from '@mui/material';
import Image from 'next/image';

import { Layout } from '@ruyyaan/shared/ui';
import { logos } from '@ruyyaan/shared/ui-assets/images';
import { Icon, IconsList } from '@ruyyaan/shared/ui-icons';
import { env } from '@ruyyaan/rebiz/util-env';

import { SideNavigationToolbar } from './elements';

const logoImage = env.NEXT_PUBLIC_LOGO_IMAGE || logos.logoCntxtWhite;
const Header = ({
  handleSideNavigationUpdate,
  open,
  handleToggleSidebar,
}: {
  handleSideNavigationUpdate: (isOpened: boolean) => void;
  open: boolean;
  handleToggleSidebar: () => void;
}) => {
  React.useEffect(() => {
    handleSideNavigationUpdate(open);
  }, [open]);
  return (
    <SideNavigationToolbar>
      <Layout.BoxHorizontal sx={{ height: '100%' }}>
        <IconButton
          size="small"
          aria-label="menu"
          sx={{
            color: 'inherit',
            padding: 0,
            '&:hover': { backgroundColor: 'transparent' },
            width: 10,
          }}
          onClick={handleToggleSidebar}
        >
          <Icon iconName={IconsList.menu} sx={{ color: 'inherit', justifyContent: 'center' }} />
        </IconButton>
        <Layout.Expander />
        <Layout.BoxCenter>
          <Image
            src={logoImage}
            alt={'app-logo'}
            width={100}
            height={50}
            style={{
              objectFit: 'contain',
              opacity: open ? 1 : 0,
            }}
          />
        </Layout.BoxCenter>
      </Layout.BoxHorizontal>
    </SideNavigationToolbar>
  );
};

export default Header;
