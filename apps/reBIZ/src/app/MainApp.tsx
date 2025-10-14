'use client';
import React, { useEffect, useState } from 'react';

import Providers from '../components/Providers';

import Loading from './loading';
import { MainAppWrapper } from './MainAppWrapper';

export function MainApp({ children }: React.PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 100);
  }, []);

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {isLoading ? (
          <Loading />
        ) : (
          <Providers>
            <MainAppWrapper>{children}</MainAppWrapper>
          </Providers>
        )}
      </body>
    </html>
  );
}
