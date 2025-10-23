import { DefaultSession } from 'next-auth';
import { AccessRole } from './types';

declare module 'next-auth' {
  type Session = {
    user: {
      roles: AccessRole[];
    } & DefaultSession['user'];
  };
}

declare module 'next-auth/jwt' {
  type JWT = {
    roles: AccessRole[];
  };
}
