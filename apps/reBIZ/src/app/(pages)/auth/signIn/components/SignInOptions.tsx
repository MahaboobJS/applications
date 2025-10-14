'use client';
import * as React from 'react';

import { Layout } from '@ruyyaan/shared/ui';
// import { isE2EEnabled, isKeycloakEnabled } from '@ruyyaan/reBiz/util-access';

import { E2ESignIn } from './E2ESignIn';
import { SignIn } from './SignIn';
import { SignInWithKeycloak } from './SignInWithKeycloak';

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

  // const showKeycloak = isKeycloakEnabled();
  // const showE2eSigning = isE2EEnabled();
  // const showDefaultLogin = !isKeycloakEnabled();
  const showKeycloak = true;
  const showE2eSigning = true;
  const showDefaultLogin = !true;

  return (
    <Layout.BoxVertical sx={{ width: '100%', gap: 2 }}>
      {showDefaultLogin && <SignIn onClick={handleOnClick} />}
      {showKeycloak && <SignInWithKeycloak onClick={handleOnClick} />}
      {showE2eSigning && <E2ESignIn />}
    </Layout.BoxVertical>
  );
}
