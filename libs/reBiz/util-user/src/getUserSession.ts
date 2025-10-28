import { getServerSession } from 'next-auth';

// import { HTTPErrors } from '@ruyyaan/shared/util-errors';

import { authOptions } from './authOptions';

export const getUserSession = async () => {
  const userSession = await getServerSession(authOptions);

  // if (!userSession) {
  //   throw HTTPErrors.unauthorized();
  // }

  return userSession;
};
