import * as React from 'react';

import { Outlet } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import type { SxProps } from '@mui/material';

/*
 * This layout is for pages that:
 *
 * - show the left menubar/navigation tree
 *
 */
export const SmallLeftLargeRight: React.FC<
  React.PropsWithChildren<{
    sx?: SxProps;
  }>
> = ({ sx, children }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          ...sx,
        }}
      >
        {children}
      </Grid>
      <Grid container item xs={12} md={9}>
        {<Outlet />}
      </Grid>
    </>
  );
};
