'use client';
import { useSnackbar } from 'notistack';

import { reportError } from '../reportError';

export function useErrorHandling() {
  const { enqueueSnackbar } = useSnackbar();

  const handleError = (
    error: unknown,
    errorMessage: string,
    logError = true,
    showSnackbar = true,
    throwError = true,
  ) => {
    if (logError) {
      reportError(error, errorMessage);
    }
    if (showSnackbar) {
      enqueueSnackbar(errorMessage, { variant: 'error' });
    }
    if (throwError) {
      throw errorMessage;
    }
  };

  return { handleError };
}
