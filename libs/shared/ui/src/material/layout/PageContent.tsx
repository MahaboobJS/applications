import type { SxProps } from '@mui/material';
import Grid from '@mui/material/Grid';

import { PageContentBox } from './PageContentBox';

export const PageContent = ({ children, sx }: React.PropsWithChildren<{ sx?: SxProps }>) => {
  return (
    <Grid item xs={12} md={12} sx={{ height: '95vh' }}>
      <PageContentBox sx={sx}>{children}</PageContentBox>
    </Grid>
  );
};
