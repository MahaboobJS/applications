import React from 'react';


import { Buttons, Layout } from '@ruyyaan/shared/ui';

import { PageContainer } from '../PageContainer';
import { TextLarge, TextRegular } from '../Typography';

export function ErrorPage({
  error,
  reset,
}: Readonly<{
  error: Error;
  reset?: () => void;
}>) {
  return (
    <PageContainer>
      <Layout.BoxCenter>
        <Layout.BoxVertical>
          <Layout.Spacer />
          <Layout.Spacer />
          <TextLarge variant="title">{error.name}</TextLarge>
          <TextRegular variant="normal">{error.message}</TextRegular>
          <Layout.Spacer />
          {reset && (
            <Layout.BoxHorizontal>
              <Buttons.PrimaryButton onClick={reset} text="Try again" />
            </Layout.BoxHorizontal>
          )}
        </Layout.BoxVertical>
      </Layout.BoxCenter>
    </PageContainer>
  );
}
