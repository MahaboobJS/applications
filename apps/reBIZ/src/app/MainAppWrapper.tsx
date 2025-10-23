'use client';
import * as React from 'react';

import { useSession } from 'next-auth/react';

// import { SideNavigation } from '@ruyyaan/reBiz/feature-side-navigation';
import { AppLayout } from '../components/AppLayout';

import Loading from './loading';

export function MainAppWrapper({ children }: React.PropsWithChildren) {
  const { data } = useSession();

  // non-authed sessions will have their own layout
  if (!data) {
    return children;
  }

  return (
    <AppLayout>
      <React.Suspense fallback={<Loading />}>
        {/* <SideNavigation /> */}

        {children}
        {/*<Footer />*/}
      </React.Suspense>
    </AppLayout>
  );
}
