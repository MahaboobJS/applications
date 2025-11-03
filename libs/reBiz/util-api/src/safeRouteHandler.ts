// Removed Prisma import - using MongoDB now
import { NextRequest, NextResponse } from 'next/server';
// Removed zod import - using simple error handling

import { AccessRequired } from '@ruyyaan/rebiz/util-access';
import { Session } from '@ruyyaan/rebiz/util-user';
import { reportError, CustomErrorType, HTTPErrors } from '@ruyyaan/shared/util-errors';

import { generateApiError } from './generateApiError';
// Removed handleZodErrors import - using simple error handling
import { processAccessFromMiddleware } from './processAccessFromMiddleware';
import { ErrorResponse } from './types';

export type Middleware = {
  accessRequirements?: AccessRequired[];
  data?: MiddlewareData;
  session?: Session;
  disableAuth?: boolean; // used for internal routes ONLY
};
type MiddlewareData = {
  request: NextRequest;
  context: { params: Record<string, string> };
} & AdditionalData;
type AdditionalData = Record<string, unknown>;

export const safeRouteHandler = async <SuccessResponse>(
  action: () => Promise<NextResponse<SuccessResponse | ErrorResponse>>,
  middleware?: Middleware
): Promise<NextResponse<SuccessResponse | ErrorResponse>> => {
  // this should only be disabled for INTERNAL routes
  if (middleware?.disableAuth !== true) {
    const hasAccess = await processAccessFromMiddleware(middleware);

    if (!hasAccess) {
      return generateApiError(HTTPErrors.unauthorized());
    }
  }

  try {
    // we await here so that we can catch any errors that are thrown
    const result = await action();
    return result;
  } catch (error) {
    reportError(error);
    const id = Math.random().toString(36).slice(2, 10);
    const supportCodeMessage = `An internal error occurred. Please contact support with reference: ${id}`;

    // Simple validation error handling without zod
    if (error instanceof Error && error.name === 'ValidationError') {
      return generateApiError(
        HTTPErrors.badRequest('Validation Error', 'validation-error', { message: error.message })
      );
    }

    // MongoDB error handling can be added here if needed
    // if (error instanceof MongoError) {
    //   return generateApiError(HTTPErrors.internalError(supportCodeMessage, 'database-error'));
    // }

    const possibleCustomError = error as CustomErrorType;

    if ('code' in possibleCustomError && 'message' in possibleCustomError) {
      if (possibleCustomError.code < 200 || possibleCustomError.code >= 600) {
        return generateApiError(
          HTTPErrors.internalError(
            `${possibleCustomError.code}: ${possibleCustomError.message}`,
            'unknown-error'
          )
        );
      }

      return generateApiError(possibleCustomError);
    }

    // default case if we cannot find a more specific error:
    return generateApiError(HTTPErrors.internalError(supportCodeMessage, 'Error'));
  }
};
