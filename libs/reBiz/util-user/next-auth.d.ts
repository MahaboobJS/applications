import type { Role } from '@prisma/client';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  type Session = {
    user: {
      roles: Role[];
    } & DefaultSession['user'];
  };
}

declare module 'next-auth/jwt' {
  type JWT = {
    roles: Role[];
  };
}
