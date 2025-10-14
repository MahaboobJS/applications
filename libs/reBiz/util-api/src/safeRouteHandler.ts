import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { CustomErrorType, HTTPErrors } from '@ruyyaan/shared/util-errors';
import { AccessRequired } from '@ruyyaan/reBiz/util-access';
import { reportError } from '@ruyyaan/reBiz/util-error';
import { Session } from '@ruyyaan/reBiz/util-user';

import { generateApiError } from './generateApiError';
import { handleZodErrors } from './handleZodErrors';
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
    const { id } = reportError(error);
    const supportCodeMessage = `An internal error occurred. Please contact support with reference: ${id}`;

    if (error instanceof ZodError) {
      const errorInformation = handleZodErrors(error);

      return generateApiError(
        HTTPErrors.badRequest('Validation Error', 'validation-error', errorInformation)
      );
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return generateApiError(HTTPErrors.internalError(supportCodeMessage, 'database-error'));
    }

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
