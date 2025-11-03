import React, { ReactNode } from 'react';

import { Layout } from '@ruyyaan/shared/ui';
import { WithLoading } from '@ruyyaan/shared/ui-loader';

import { Loading } from '../Loading';

export type LoaderProps = {
  children: ReactNode;
  isLoading: boolean;
  fullScreen?: boolean;
};

export const Loader: React.FC<LoaderProps> = ({ isLoading, children, fullScreen = false }) => {
  const content = (
    <WithLoading loaderType="custom" isLoading={isLoading} CustomLoaderComponent={Loading}>
      {children}
    </WithLoading>
  );

  return fullScreen ? (
    <Layout.BoxHorizontal sx={{ width: '100vw', height: '100vh' }}>{content}</Layout.BoxHorizontal>
  ) : (
    content
  );
};

export default Loader;
