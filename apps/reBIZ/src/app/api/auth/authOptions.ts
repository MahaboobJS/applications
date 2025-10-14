import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { AuthOptions } from 'next-auth';
import { Provider } from 'next-auth/providers';
import GoogleProvider from 'next-auth/providers/google';
import { getRoutes, getMongoClient } from '@ruyyaan/reBiz/util-access';

const routes = getRoutes();

// MongoDB connection
const clientPromise = getMongoClient();
const mongoAdapter = MongoDBAdapter(clientPromise);

const providersList: Provider[] = [];

if (process.env['WORK_PERMIT_AUTH_GOOGLE_ID']) {
  providersList.push(
    GoogleProvider({
      clientId: process.env['WORK_PERMIT_AUTH_GOOGLE_ID'] ?? '',
      clientSecret: process.env['WORK_PERMIT_AUTH_GOOGLE_SECRET'] ?? '',

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
    }),
  );
}



export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  adapter: mongoAdapter,
  providers: providersList,

  events: {
    signIn: async (message) => {
      return {} as any;
    },
    signOut: async (message) => {
      return {} as any;
    },
  },

  callbacks: {
    /**
     * Add notes here why we use 'session'
     *
     * 1. This is accessible from:
     *   const { data, ...rest } = useSession<T>(options);
     * 2. 'token' has everything from jwt
     */
    async session({ session, token }: { session: any; token: any }) {
      if (!token.sub) {
        throw new Error(
          `Error fetching default user profile. Check your auth provider.`,
        );
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
    signIn: routes['LOGIN'].url,
  },
};
