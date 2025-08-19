import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Demo users for authentication - replace with your actual user database
const demoUsers = [
  {
    id: '1',
    email: 'admin@reBiz.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: '2',
    email: 'user@reBiz.com',
    password: 'user123',
    name: 'Regular User',
    role: 'user',
  },
  {
    id: '3',
    email: 'demo@reBiz.com',
    password: 'demo123',
    name: 'Demo User',
    role: 'demo',
  },
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Find user by email
        const user = demoUsers.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );

        if (user) {
          // Return user object without password
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signIn',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-here',
});

export { handler as GET, handler as POST };
