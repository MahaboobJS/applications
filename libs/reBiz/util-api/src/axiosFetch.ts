import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

import { CustomErrorType } from '@ruyyaan/shared/util-errors';
import { reportError } from '@ruyyaan/rebiz/util-error';

export type FetchDataOptions = {
  apiUrl: string;
  pathParams?: Record<string, string | number>;
  searchParams?: Record<string, string | number>;
  body?: unknown;
  disableCache?: boolean;
} & AxiosRequestConfig;

export const axiosFetch = async ({
  apiUrl,
  searchParams,
  body,
  disableCache,
  ...options
}: FetchDataOptions) => {
  try {
    // Add cache-control header to disable caching
    const headers = disableCache
      ? { ...options.headers, 'Cache-Control': 'no-cache' }
      : options.headers;

    // Make the request with search parameters and body
    const response = await axios({
      method: body ? 'post' : 'get',
      url: apiUrl,
      params: searchParams,
      data: body,
      headers,
      ...options,
    });

    return response.data;
  } catch (error) {
    reportError(error);
    if (axios.isAxiosError(error) && error.response?.data?.error) {
      throw error.response.data.error;
    } else {
      const customError: CustomErrorType = {
        message: 'Failed to fetch data for: ' + apiUrl,
        name: 'unhandledError',
        code: 500,
      };
      throw customError;
    }
  }
};
