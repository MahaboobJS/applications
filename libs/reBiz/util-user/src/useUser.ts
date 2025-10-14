import * as React from 'react';

import type { AccessRole } from '@prisma/client';
import type { JWT as DefaultJWT } from 'next-auth/jwt';
import type { UseSessionOptions } from 'next-auth/react';
import { useSession } from 'next-auth/react';

import { Session as UserSession } from './types';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  //@ts-expect-error Duplicate identifier 'JWT'
  type JWT = {
    actions: AccessRole[];
  } & DefaultJWT;
}

declare module 'next-auth' {
  //@ts-expect-error Duplicate identifier 'Session'
  type Session = UserSession;
}

/**
 * Custom React Hook to retrieve the logged-in user's session data, with additional error handling.
 *
 * This hook is ideal when you are confident that the user is already logged in.
 *
 * **When to Use:**
 * - Use this hook when you know that the user is authenticated.
 * - It provides a convenient way to access user information, such as email and name,
 *   while handling common errors like missing session or user data.
 *
 * **What to Use if User Authentication is Uncertain:**
 * - If you're not certain about the user's authentication status, use the `useSession` hook directly and check for the `data` property.
 * - Typically, most pages will have user session validation done by `<AuthenticatedPage>`, so this hook can be used safely when user state is confirmed.
 *
 * **Usage Example:**
 *
 * ```tsx
 * const { data, error } = useUser();
 * if (error) {
 *   // Handle error
 * }
 * console.log(data.user.email); // Access user email
 * ```
 *
 * **Other Notes:**
 * - This hook is only applicable on the client side.
 * - For server-side usage, consider `getServerSession`.
 *
 * **Related Documentation:**
 * - [NextAuth.js - useSession](https://next-auth.js.org/getting-started/client#usesession)
 *
 * @template T
 * @param {UseSessionOptions<T>} options - Optional configuration options for the session.
 * @returns {{ data: UserSession; error?: string }} - The user session data along with any error that might have occurred.
 */
export const useUser = <T extends boolean>(options?: UseSessionOptions<T>) => {
  const { data: session, ...rest } = useSession<T>(options);
  const [data, setData] = React.useState<{ data: UserSession; error?: string }>({
    data: {
      user: {
        email: '',
      },
    } as UserSession,
    error: 'Session not ready',
  });

  React.useEffect(() => {
    if (!session) {
      setData({ error: 'Session is not available', data: {} as UserSession });
      return;
    }

    if (!session.user) {
      setData({ error: 'User is not available', data: {} as UserSession });
      return;
    }

    if (!session.user.email) {
      setData({ error: 'User email is missing', data: {} as UserSession });
      return;
    }

    if (!session.user.name) {
      setData({ error: 'User name is missing', data: {} as UserSession });
      return;
    }

    setData({ data: session, error: undefined });
  }, [session]);

  return { ...data, ...rest };
};
