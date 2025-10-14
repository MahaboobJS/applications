import type { User } from '@prisma/client';
import { AccessRole } from '@prisma/client';
import { DefaultSession } from 'next-auth';

export type SessionUser = NonNullable<DefaultSession['user']>;
export type Session = {
  user: {
    id: User['id'];
    actions: AccessRole[];
    currentOrg?: User['currentOrgId'];
    email: NonNullable<SessionUser['email']>;
    name: NonNullable<SessionUser['name']>;
  } & DefaultSession['user'];
  status: string;
} & DefaultSession;
