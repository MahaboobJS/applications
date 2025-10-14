import React from 'react';
import { ErrorBoundary as InternalErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from './ErrorFallback';

const handleError = (error: unknown) => {
  console.log('We need to auto report this:', error);
};

export const ErrorBoundary: React.FC<
  React.PropsWithChildren<{
    FallbackComponent?: typeof ErrorFallback;
  }>
> = ({ children, FallbackComponent }) => (
  <InternalErrorBoundary
    FallbackComponent={FallbackComponent || ErrorFallback}
    onError={handleError}
  >
    {children}
  </InternalErrorBoundary>
);
