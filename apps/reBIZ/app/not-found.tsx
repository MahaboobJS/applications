'use client';
import Link from 'next/link';

import { Layout } from '@ruyyaan/shared/ui';
import { PageContainer, TextLarge, TextRegular } from '@ruyyaan/rebiz/ui';

export default function NotFound() {
  return (
    <PageContainer>
      <Layout.PageContent>
        <Layout.BoxCenter>
          <Layout.BoxVertical>
            <TextLarge variant="title">Not Found</TextLarge>
            <TextRegular>Could not find the requested page.</TextRegular>
            <Link href="/">
              <TextRegular>Return Home</TextRegular>
            </Link>
          </Layout.BoxVertical>
        </Layout.BoxCenter>
      </Layout.PageContent>
    </PageContainer>
  );
}
