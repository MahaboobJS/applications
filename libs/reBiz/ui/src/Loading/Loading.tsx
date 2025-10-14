'use client';

import React from 'react';
import { RotateLoader } from 'react-spinners';

import { useTheme } from '@mui/material/styles';

export type LoadingProps = {
  fullScreen?: boolean;
};
export const Loading: React.FC<LoadingProps> = ({ fullScreen = false }) => {
  const theme = useTheme();
  const spinnerSize = fullScreen ? 15 : 10;
  const styles = fullScreen
    ? {
        height: '100vh',
        width: '100vw',
      }
    : {
        height: '100px',
        width: '100px',
      };
  const content = (
    <RotateLoader
      color={theme.palette.primary.main}
      aria-label="Loading Spinner"
      size={spinnerSize}
      data-testid="loading"
    />
  );

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...styles,
      }}
    >
      {content}
    </div>
  );
};
