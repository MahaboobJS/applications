import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

/*
 * This layout is just for the main app wrapper
 *
 *
 */
export const Main = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={0}
        sx={
          {
            // width: '100vw',
          }
        }
      >
        <Outlet />
      </Grid>
    </Box>
  );
};
