'use client';

import { MainAppWrapper } from './MainAppWrapper';
import Providers from '../components/Providers';

export function MainApp({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <MainAppWrapper>{children}</MainAppWrapper>
    </Providers>
  );
}
