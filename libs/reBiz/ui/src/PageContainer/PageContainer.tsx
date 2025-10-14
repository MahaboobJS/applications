import React from 'react';

import { Container } from '@mui/material';
import type { SxProps } from '@mui/material';

import { WebVitals } from '@ruyyaan/shared/feature-web-vitals';

import { HEADER_PADDING_BOTTOM, HEADER_PADDING_TOP, FULL_HEIGHT } from '../constants';

type PageContainerType = React.PropsWithChildren & {
  sx?: SxProps;
  disableGutters?: boolean;
};
export const PageContainer = ({ children, sx, disableGutters = false }: PageContainerType) => {
  return (
    <Container
      maxWidth={false}
      disableGutters={disableGutters}
      sx={{
        paddingTop: HEADER_PADDING_TOP,
        paddingBottom: HEADER_PADDING_BOTTOM,
        height: FULL_HEIGHT,
        ...(sx || {}),
      }}
    >
      <WebVitals />
      {children}
    </Container>
  );
};
