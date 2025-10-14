import {
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

import { ErrorResponse } from './types';

type ErrorType = ErrorResponse['error'];
type UseDynamicQueryOptions<TData = unknown, TError = ErrorType> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<TData>;
} & UseQueryOptions<TData, TError>;

export const useApiQuery = <TData = unknown, TError = ErrorType>(
  options: UseDynamicQueryOptions<TData, TError>
): UseQueryResult<TData, TError> => {
  return useQuery<TData, TError>(options);
};
