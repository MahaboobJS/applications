import { canAccess } from '@ruyyaan/rebiz/util-access';
import { getUserSession } from '@ruyyaan/rebiz/util-user';

import { Middleware } from './safeRouteHandler';

export const processAccessFromMiddleware = async (middleware?: Middleware) => {
  let session = middleware?.session;
  // this allows for us to pass 'null' sessions
  // which will let testing simulate a user not being logged in
  if (middleware?.session === undefined) {
    session = await getUserSession();
  }

  // if the user is not logged in
  // then we need to exit right away
  if (!session?.user) {
    return false;
  }

  // if there are no requirements for access,
  // then we can let the user through
  if (middleware === undefined) {
    return true;
  }

  if (middleware.accessRequirements === undefined) {
    return true;
  }

  try {
    const hasAccess = middleware.accessRequirements.find((requiredAccess) =>
      canAccess(session.user.actions, requiredAccess, {
        session: session.user,
        ...middleware.data,
      })
    );

    return hasAccess;
  } catch (error) {
    console.error(error);
  }

  return false;
};
