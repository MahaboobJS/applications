'use client';
import * as React from 'react';

import { Layout } from '@ruyyaan/shared/ui';
// import { isE2EEnabled } from '@ruyyaan/rebiz/util-access';

import { E2ESignIn } from './E2ESignIn';
import { SignIn } from './SignIn';

export function SignInOptions({
  onClick,
}: Readonly<{
  onClick?: () => void;
}>) {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // const showE2eSigning = isE2EEnabled();
  const showE2eSigning = false;
  const showDefaultLogin = true;

  return (
    <Layout.BoxVertical sx={{ width: '100%', gap: 2 }}>
      {showDefaultLogin && <SignIn onClick={handleOnClick} />}
      {showE2eSigning && <E2ESignIn />}
    </Layout.BoxVertical>
  );
}
