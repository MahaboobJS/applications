import * as React from 'react';

import { signIn } from 'next-auth/react';


import { Buttons, Layout } from '@ruyyaan/shared/ui';

export function SignIn({
  provider = 'google',
  onClick,
}: Readonly<{
  provider?: 'google';
  onClick?: () => void;
}>) {
  const handleOnClick = () => {
    signIn(provider);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Layout.BoxVertical>
      <Buttons.PrimaryButton text={'SignIn'} onClick={handleOnClick} />
    </Layout.BoxVertical>
  );
}
