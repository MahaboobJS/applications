import { castUnknownVariable } from '../lib/utils/castUnknown';

import { reportError } from './reportError';

export const parseJson = <Data>(data: string, throwError = true): Data => {
  try {
    const unknownObject = JSON.parse(data);

    const safeValue = castUnknownVariable<Data>(unknownObject);

    if (!safeValue) {
      throw new Error('Could not parse JSON');
    }

    return safeValue;
  } catch (error) {
    if (throwError) {
      reportError(error);
      throw error;
    }

    return {} as Data;
  }
};
