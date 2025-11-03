import React, { ReactNode } from 'react';

import { type SxProps } from '@mui/material';


import { LoaderType, useLoading } from './useLoading';

export type WithLoadingProps = {
  loaderType: LoaderType;
  children: ReactNode;
  isLoading: boolean;
  sx?: SxProps;
  CustomLoaderComponent?: React.ComponentType<object>;
};

export const WithLoading: React.FC<WithLoadingProps> = ({
  loaderType,
  isLoading,
  sx,
  CustomLoaderComponent,
  children,
}) => {
  const { renderLoader, startLoader, stopLoader } = useLoading(
    loaderType,
    sx,
    CustomLoaderComponent,
  );

  React.useEffect(() => {
    if (isLoading) {
      startLoader();
    } else {
      stopLoader();
    }
  }, [isLoading, startLoader, stopLoader]);

  return (
    <React.Fragment>
      {isLoading && renderLoader()}
      {(!isLoading || !renderLoader()) && children}
    </React.Fragment>
  );
};

export default WithLoading;
