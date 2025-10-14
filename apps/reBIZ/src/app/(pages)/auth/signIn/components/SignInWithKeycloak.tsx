import * as React from 'react';

import { signIn } from 'next-auth/react';

import { Buttons, Layout } from '@ruyyaan/shared/ui';

export function SignInWithKeycloak({
  onClick,
}: Readonly<{
  provider?: 'keycloak' | 'google';
  onClick?: () => void;
}>) {
  const handleOnClick = (provider: string) => {
    signIn(provider);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Layout.BoxVertical>
      <Buttons.PrimaryButton text={'Sign In with Google'} onClick={() => handleOnClick('google')} />
      <Buttons.PrimaryButton text={'Sign In with ADFS'} onClick={() => handleOnClick('keycloak')} />
    </Layout.BoxVertical>
  );
}
