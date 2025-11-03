'use client';
import * as React from 'react';

import { TextRegular } from '@ruyyaan/rebiz/ui';
import { Layout } from '@ruyyaan/shared/ui';

export function ErrorBox({ errors }: Readonly<{ errors: string[] }>) {
  const errorCodes: Record<string, string> = {
    OAuthCreateAccount: 'An error occurred while creating your account',
    OAuthSignin: 'Authentication error. Please try again.',
  };

  return (
    <Layout.BoxVertical sx={{ gap: 1 }}>
      {errors.map((error) => {
        const errorText = errorCodes[error] || 'Unknown error occurred';
        return (
          <Layout.BoxHorizontal key={error} sx={{ gap: 1, justifyContent: 'center' }}>
            <TextRegular variant="error">{errorText}</TextRegular>
          </Layout.BoxHorizontal>
        );
      })}
    </Layout.BoxVertical>
  );
}
