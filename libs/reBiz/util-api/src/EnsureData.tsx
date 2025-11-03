import * as React from 'react';

import { QueryObserverBaseResult, UseQueryResult } from '@tanstack/react-query';


import { Loading, TextRegular } from '@ruyyaan/rebiz/ui';

import { ErrorResponse, SuccessResponse } from './types';

function isErrorResponse<DataType>(
  data: NonNullable<ErrorResponse | SuccessResponse<DataType>>
): data is NonNullable<ErrorResponse> {
  return typeof data === 'object' && 'error' in data;
}

function isSuccessResponse<DataType>(
  data: NonNullable<ErrorResponse | SuccessResponse<DataType>>
): data is Exclude<NonNullable<SuccessResponse<DataType>>, ErrorResponse> {
  return typeof data === 'object' && !('error' in data);
}

// this does not work, but would be cool if it did!
// export type EnsuredResult<
//   Query extends (...args: any) => ErrorResponse | SuccessResponse<unknown>
// > = Exclude<NonNullable<ReturnType<Query>>, ErrorResponse>;

export function EnsureData<
  QueryData = ErrorResponse | SuccessResponse<unknown>,
  QueryArgs = unknown
>({
  query,
  queryArgs = {} as QueryArgs,
  children,
  noLoader,
}: Readonly<{
  query: (args: QueryArgs) => UseQueryResult<QueryData>;
  queryArgs?: QueryArgs;
  noLoader?: boolean;
  children: (
    props: {
      data: Exclude<NonNullable<QueryData>, ErrorResponse>;
    } & Omit<QueryObserverBaseResult<QueryData>, 'data' | 'error' | 'isLoading'>
  ) => React.ReactElement;
}>) {
  const { data, isLoading, error, ...rest } = query(queryArgs);

  if (isLoading) {
    if (noLoader) {
      return null;
    }

    return <Loading />;
  }

  if (error) {
    console.log('error', error);
    let message = 'data not found';

    if (typeof error === 'string') {
      message = error;
    }

    if (error instanceof Error) {
      message = error.message;
    }

    if (typeof error === 'object' && 'code' in error && error.code === 401) {
      message = 'Access denied';
    }

    return <TextRegular variant="error">Error: {message}</TextRegular>;
  }

  if (!data) {
    return <TextRegular variant="error">Error: data not found</TextRegular>;
  }

  if (isErrorResponse(data)) {
    console.log('data.error', data.error);
    return <TextRegular variant="error">Error from network detected!</TextRegular>;
  }

  if (isSuccessResponse(data)) {
    return children({
      data,
      ...rest,
    });
  }

  return <TextRegular variant="error">Major error: unexpected data format</TextRegular>;
}
