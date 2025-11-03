import { NextResponse } from 'next/server';

import { SuccessResponse } from './types';

export const generateApiSuccess = <T>(response: T) => {
  if (response === null) {
    return NextResponse.json({} as T, { status: 204 }); // 204 No Content
  }

  return NextResponse.json<SuccessResponse<T>>(response, { status: 200 }); // 200 OK
};
