import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getMongoClient } from '@ruyyaan/reBiz/util-access';

// MongoDB connection
const clientPromise = getMongoClient();
const mongoAdapter = MongoDBAdapter(clientPromise);

const providersList: any[] = [];

// Add Credentials Provider for E2E testing
providersList.push(
  CredentialsProvider({
    name: 'credentials',
    credentials: {
      username: { label: 'Email', type: 'email' },
      password: { label: 'Password', type: 'password' }
    },
    async authorize(credentials) {
      if (!credentials?.username || !credentials?.password) {
        return null;
      }

      // Dummy credentials for E2E testing
      const dummyUsers = [
        {
          id: '1',
          email: 'admin@ruyyaan.com',
          password: 'admin123',
          name: 'Admin User',
          image: null,
        },
        {
          id: '2',
          email: 'user@ruyyaan.com',
          password: 'user123',
          name: 'Test User',
          image: null,
        },
        {
          id: '3',
          email: 'demo@ruyyaan.com',
          password: 'demo123',
          name: 'Demo User',
          image: null,
        }
      ];

      const user = dummyUsers.find(
        u => u.email === credentials.username && u.password === credentials.password
      );

      if (user) {
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      }

      return null;
    }
  })
);

if (process.env['REBIZ_APP_AUTH_GOOGLE_ID']) {
  providersList.push(
    GoogleProvider({
      clientId: process.env['REBIZ_APP_AUTH_GOOGLE_ID'] ?? '',
      clientSecret: process.env['REBIZ_APP_AUTH_GOOGLE_SECRET'] ?? '',

      /**
       * Add notes here why we use 'profile'
       */
      async profile(profile) {
        // console.log('User profile:', profile);

        const userProfile = {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image: profile.picture,
        };

        return userProfile;
      },
    })
  );
}

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  adapter: mongoAdapter,
  providers: providersList,
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  // Force NextAuth.js to use the frontend server, not the backend
  url: process.env.NEXTAUTH_URL || 'http://localhost:3000',

  events: {
    signIn: async (message) => {
      return {} as any;
    },
    signOut: async (message) => {
      return {} as any;
    },
  },

  callbacks: {
    async jwt({ token, user }) {
      // If user is provided (during sign in), add user info to token
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      // Add token info to session
      if (token) {
        session.user.id = token.sub;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.image;
      }

      return {
        ...session,
        user: {
          ...session.user,
          ...token,
        },
      };
    },
  },
  pages: {
    signIn: '/auth/signIn',
  },
};
