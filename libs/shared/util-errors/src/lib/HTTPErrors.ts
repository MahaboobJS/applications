export type CustomErrorType = {
  code: number;
  // It will be handled once we integrate schema validation
  isAutoRetryable?: boolean;
  missing?: Record<string, string>;
  duplicated?: Record<string, string>;
  forbidden?: Record<string, string>;
} & Error;

type ExtraInformation = Pick<
  CustomErrorType,
  'duplicated' | 'forbidden' | 'missing'
>;

const getError = (
  code: number,
  message: string,
  name = 'unknown-error',
  extraInformation?: ExtraInformation,
) => {
  return {
    code,
    name,
    message,
    ...extraInformation,
  };
};

type ErrorTypes = 'badRequest' | 'unauthorized' | 'notFound' | 'internalError';

export const HTTPErrors: Record<
  ErrorTypes,
  (
    message?: string,
    name?: string,
    extraInformation?: ExtraInformation,
  ) => CustomErrorType
> = {
  badRequest: (
    message = 'Bad request',
    name = 'Bad request',
    extraInformation = {},
  ) => getError(400, message, name, extraInformation),
  unauthorized: (message = 'Unauthorized', name = 'Unauthorized') =>
    getError(401, message, name),
  notFound: (message = 'Not found', name = 'Not found') =>
    getError(404, message, name),
  internalError: (
    message = 'An internal server error has occurred',
    name = 'InternalError',
  ) => getError(500, message, name),
};
