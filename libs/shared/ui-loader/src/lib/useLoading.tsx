'use client';

import React, { useState } from 'react';

import { startHolyLoader, stopHolyLoader } from 'holy-loader';

import { type SxProps } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import { Loading } from '@ruyyaan/shared/ui';

export type LoaderType = 'spinner' | 'skeleton' | 'progress' | 'custom';

export const useLoading = (
  loaderType: LoaderType = 'progress',
  sx?: SxProps,
  CustomLoaderComponent?: React.ComponentType<object>,
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const startLoader = () => {
    setIsLoading(true);
  };

  const stopLoader = () => {
    setIsLoading(false);
  };

  const renderLoader = React.useCallback(() => {
    if (isLoading) {
      switch (loaderType) {
        case 'spinner':
          return (
            <Loading
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                ...sx,
              }}
            />
          );
        case 'skeleton':
          return <Skeleton sx={sx} />;
        case 'custom':
          return CustomLoaderComponent ? <CustomLoaderComponent /> : null;
        case 'progress':
          startHolyLoader();
          return;
        default:
          return null;
      }
    } else {
      switch (loaderType) {
        case 'progress':
          stopHolyLoader();
          return;
        default:
          return null;
      }
    }
  }, [CustomLoaderComponent, isLoading, loaderType, sx]);

  React.useEffect(() => {
    renderLoader();

    // Clean up the loading state when the component unmounts
    return () => {
      stopLoader();
    };
  }, [isLoading, renderLoader]);

  return { isLoading, startLoader, stopLoader, renderLoader };
};
