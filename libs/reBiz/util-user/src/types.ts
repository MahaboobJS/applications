import { DefaultSession } from 'next-auth';

// MongoDB-based types
export interface AccessRole {
  id: string;
  name: string;
  scope: string;
  actions: string[];
  domain?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  currentOrgId?: string;
  roles: AccessRole[];
  createdAt: Date;
  updatedAt: Date;
}

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
