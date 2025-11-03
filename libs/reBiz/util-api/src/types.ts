import { NextResponse, NextRequest } from 'next/server';

import { CustomErrorType } from '@ruyyaan/shared/util-errors';

export type UnwrapNextResponse<T> = T extends Promise<NextResponse<infer U>> ? Promise<U> : never;

export type APIReturnType<
  APIFunction extends (request: NextRequest, context: Context) => unknown,
  Context = Record<string, string>
> = UnwrapNextResponse<ReturnType<APIFunction>>;

export type ErrorResponse = {
  error: CustomErrorType;
};

export type SuccessResponse<ResponseData> = ResponseData;

// common props for our APIs:

export type CommonIdProps = {
  params: {
    id: string;
  };
};
