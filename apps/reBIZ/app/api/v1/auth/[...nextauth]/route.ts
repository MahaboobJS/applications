import NextAuth from 'next-auth/next';

import { authOptions } from '@ruyyaan/reBiz/util-user';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
