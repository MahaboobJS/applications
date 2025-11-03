import React from 'react';

import { Box } from '@mui/material';
import type { SxProps } from '@mui/material';

import { sizes } from '../../styles/sizes';



// the only spacing component you need
// use this instead of margin
export const Space: React.FC<
  React.PropsWithChildren<{ space: keyof typeof sizes.raw; sx?: SxProps }>
> = ({ space, sx, children }) => {
  return (
    <Box
      sx={{
        gap: sizes.pixels[space],
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
