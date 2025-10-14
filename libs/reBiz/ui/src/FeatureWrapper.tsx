import { Grid } from '@mui/material';

import { PageContainer } from './PageContainer';

type FeatureWrapperProps = {
  disableGutters?: boolean;
};

export function FeatureWrapper({
  disableGutters = false,
  children,
}: React.PropsWithChildren<FeatureWrapperProps>) {
  return (
    <PageContainer disableGutters={disableGutters}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12}>
          {children}
        </Grid>
      </Grid>
    </PageContainer>
  );
}
