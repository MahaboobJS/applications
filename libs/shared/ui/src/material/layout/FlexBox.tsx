import * as React from 'react';

import { Box } from '@mui/material';
import type { SxProps } from '@mui/material';

type Props = React.PropsWithChildren<{ sx?: SxProps }>;

// forwardRef is needed because we print components that are wrapped with this
// and react-to-pdf requires a ref to be passed to the component
export const FlexBox = React.forwardRef(({ children, sx }: Props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
});
