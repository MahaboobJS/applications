import { ZodError } from 'zod';

import { testWithMockedError } from '@ruyyaan/shared/util-test';

import { handleZodErrors } from './handleZodErrors';

describe('handleZodErrors', () => {
  it('maps invalid_type errors to forbidden custom error type', () => {
    const error: ZodError = {
      errors: [
        {
          code: 'invalid_type',
          path: ['field1'],
          expected: 'string',
        },
        {
          code: 'invalid_type',
          path: ['field2'],
          expected: 'number',
        },
      ],
    };

    const result = handleZodErrors(error);

    expect(result).toEqual({
      forbidden: {
        field1: 'Expected: string',
        field2: 'Expected: number',
      },
    });
  });

  testWithMockedError('logs an error for unhandled error types', ({ consoleMock }) => {
    const error: ZodError = {
      errors: [
        {
          code: 'unknown_error',
          path: ['field3'],
        },
      ],
    };

    const result = handleZodErrors(error);

    expect(consoleMock).toHaveBeenCalledWith(
      'We dont handle this error type well yet:',
      error.errors[0]
    );
    expect(result).toEqual({});
  });
});
