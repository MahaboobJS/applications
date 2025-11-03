import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import GoogleProvider from 'next-auth/providers/google';

import { getMongoClient, getRoutes, isE2EEnabled } from '@ruyyaan/rebiz/util-access';

const routes = getRoutes();
const clientPromise = getMongoClient();

const mongoAdapter = MongoDBAdapter(clientPromise);

const providersList: any[] = [];

// if (process.env['REBIZ_APP_AUTH_GOOGLE_ID']) {
//   providersList.push(
//     GoogleProvider({
//       clientId: process.env['REBIZ_APP_AUTH_GOOGLE_ID'] ?? '',
//       clientSecret: process.env['REBIZ_APP_AUTH_GOOGLE_SECRET'] ?? '',

//       /**
//        * Add notes here why we use 'profile'
//        */
//       async profile(profile) {
//         // console.log('User profile:', profile);

//         const userProfile = {
//           id: profile.sub,
//           name: `${profile.given_name} ${profile.family_name}`,
//           email: profile.email,
//           image: profile.picture,
//         };

//         return userProfile;
//       },
//     })
//   );
// }

if (isE2EEnabled()) {
  providersList.push(
    CredentialsProvider({
      name: 'End to end testing authentication',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'ruyyaan',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // if (credentials?.password === '1234') {
        return Promise.resolve({
          id: credentials?.username ?? '',
          email: credentials?.username,
          name: credentials?.username,
          image: 'https://avatars.githubusercontent.com/u/67470890?s=200&v=4',
        });
        // }
        return Promise.resolve(null);
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

  events: {
    signIn: async (message) => {
      // TODO: Implement MongoDB-based logging
      console.log('User signed in:', message.user.id);
    },
    signOut: async (message) => {
      // TODO: Implement MongoDB-based logging
      console.log('User signed out:', message.token.sub);
    },
  },

  callbacks: {
    // we need to look into how to throw custom errors
    // that the UI can intercept
    // this is one option, though it does not goto the url query
    // async signIn({ user, account, profile, email, credentials })
    // {
    //   if (user?.error === 'my custom error') {
    //     throw new Error('custom error to the client')
    //   }
    //   return true
    // },
    /**
     * Add notes here why we use 'jwt'
     *
     * 1. This is accessible from:
     *   const { token } = request.nextauth;
     * 2. It is also passed into session below
     */
    async jwt({ token }) {
      if (!token.sub) {
        throw new Error(`Error fetching default user profile. Check your auth provider.`);
      }
      // TODO: Implement MongoDB-based user session retrieval
      // For now, return the token as-is
      return token;
    },
    /**
     * Add notes here why we use 'session'
     *
     * 1. This is accessible from:
     *   const { data, ...rest } = useSession<T>(options);
     * 2. 'token' has everything from jwt
     */
    async session({ session, token }) {
      if (!token.sub) {
        throw new Error(`Error fetching default user profile. Check your auth provider.`);
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
