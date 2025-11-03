import * as React from 'react';

import Box from '@mui/material/Box';
import type { SxProps } from '@mui/material';

import { sizes } from '../../styles/sizes';



type Variant = 'long' | 'normal';
type Spacing = 'some' | 'none';

export const BoxVertical = React.forwardRef(
  (
    {
      children,
      sx,
      variant = 'normal',
      spacing = 'some',
      role,
    }: React.PropsWithChildren<{
      sx?: SxProps;
      variant?: Variant;
      spacing?: Spacing;
      role?: React.AriaRole;
    }>,
    ref
  ) => {
    const gap = spacing === 'some' ? sizes.pixels._3 : 0;
    const flexSettings = variant === 'long' ? { flex: 1 } : {};

    return (
      <Box
        ref={ref}
        sx={{
          gap,
          flexDirection: 'column',
          display: 'flex',
          ...flexSettings,
          ...sx,
        }}
        role={role}
      >
        {children}
      </Box>
    );
  }
);
