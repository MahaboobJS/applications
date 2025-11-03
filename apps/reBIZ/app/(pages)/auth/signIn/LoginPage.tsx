'use client';

import * as React from 'react';

import { useSession } from 'next-auth/react';
import styled from 'styled-components';

import Image from 'next/image';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';


import Grid from '@mui/material/Grid';

import { TextLarge, Loading } from '@ruyyaan/rebiz/ui';
import { Layout, BorderLinearProgress } from '@ruyyaan/shared/ui';
import { backgrounds, logos } from '@ruyyaan/shared/ui-assets/images';

import { ErrorBox } from './components/ErrorBox';
import { SignInOptions } from './components/SignInOptions';

const BackgroundGrid = styled(Grid)`
  background-image: url(${() => backgrounds.loginBackground.src});
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 1920px) {
    background-size: cover;
  }
`;

export function LoginPageForStories(params: ReadonlyURLSearchParams) {
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<string[]>([]);
  const { status } = useSession();

  const isError = !loading && errors.length !== 0;

  React.useEffect(() => {
    setErrors(params.getAll('error'));
  }, [params]);

  const handleOnClick = () => {
    setLoading(true);
  };

  if (status === 'authenticated') {
    return <Loading fullScreen />;
  }

  return (
    <Layout.BoxVertical sx={styles.main}>
      <BackgroundGrid container>
        <Layout.BoxVertical
          sx={{
            gap: 2,
            width: 320,
            height: 400,
            alignItems: 'center',
          }}
        >
          <Image
            priority={true}
            src={logos.logoSignIn.src}
            alt={'Company logo'}
            width={160}
            height={70}
            style={{ objectFit: 'contain', marginBottom: -16 }}
          />

          <Layout.BoxCenter>
            <TextLarge variant="inverted" weight="bold">
              Rebiz
            </TextLarge>
          </Layout.BoxCenter>
          <Layout.BoxVertical sx={{ width: '100%', gap: 2 }}>
            {isError && <ErrorBox errors={errors} />}
            {!loading && <SignInOptions onClick={handleOnClick} />}
            {loading && (
              <Layout.BoxVertical sx={{ marginTop: 4 }}>
                <BorderLinearProgress />
              </Layout.BoxVertical>
            )}
          </Layout.BoxVertical>
        </Layout.BoxVertical>
      </BackgroundGrid>
    </Layout.BoxVertical>
  );
}
export function LoginPage() {
  const params = useSearchParams();

  return LoginPageForStories(params);
}

const styles = {
  main: {
    gap: 1,
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    background:
      'linear-gradient(180deg, #081226 0%, #081226 12.5%, #041626 50%, #04080D 75%, #04080D 100%)',
  },
};
