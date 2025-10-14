import * as React from 'react';

import Drawer from '@mui/material/Drawer';

const DEFAULT_WIDTH = 345;

type Props = React.PropsWithChildren<{ width?: number }>;
export const DrawerRight = ({ children, width }: Props) => (
  <Drawer
    sx={{
      width: width || DEFAULT_WIDTH,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: width || DEFAULT_WIDTH,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="right"
  >
    {children}
  </Drawer>
);
