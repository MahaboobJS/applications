import { NextResponse } from 'next/server';

import { CustomErrorType } from '@ruyyaan/shared/util-errors';

import { ErrorResponse } from './types';

export const generateApiError = (error: CustomErrorType): NextResponse<ErrorResponse> => {
  return NextResponse.json(
    {
      error,
    },
    { status: error.code ?? 500 }
  );
};
