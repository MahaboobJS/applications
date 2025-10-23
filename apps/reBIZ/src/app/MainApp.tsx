'use client';
import React from 'react';

import Providers from '../components/Providers';

import { MainAppWrapper } from './MainAppWrapper';

export function MainApp({ children }: React.PropsWithChildren) {
  return (
    <Providers>
      <MainAppWrapper>{children}</MainAppWrapper>
    </Providers>
  );
}
