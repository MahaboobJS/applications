import { Box, Grid, type SxProps } from '@mui/material';

export const AdminPage = ({ children, sx }: React.PropsWithChildren<{ sx?: SxProps }>) => {
  return (
    <Grid item xs={12} md={12}>
      <Box
        sx={{
          padding: '24px',
          ...sx,
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};
