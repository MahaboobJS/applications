import { ZodError } from 'zod';

import { CustomErrorType } from '@ruyyaan/shared/util-errors';

export const handleZodErrors = (error: ZodError) => {
  // we map the errors to our custom types
  // so we know we are not leaking any implementation information
  const zodErrorInOurFormat = error.errors.reduce((result, currentError) => {
    if (currentError.code === 'invalid_type') {
      return {
        ...result,
        forbidden: {
          ...(result.forbidden || {}),
          [currentError.path.join('.')]: 'Expected: ' + currentError.expected,
        },
      };
    }

    console.error('We dont handle this error type well yet:', currentError);

    return result;
  }, {} as CustomErrorType);

  return zodErrorInOurFormat;
};
