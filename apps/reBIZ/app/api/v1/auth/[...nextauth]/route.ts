import NextAuth from 'next-auth/next';

import { authOptions } from '@ruyyaan/rebiz/util-user';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
