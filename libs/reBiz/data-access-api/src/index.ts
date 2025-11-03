// Simplified data-access-api for authentication only
import type { Session } from 'next-auth';

// Simple mock implementation for useGetAccessQuery
export function useGetAccessQuery(session?: Session | null): {
  data?:
    | {
        homepage: string;
        connections: {
          read: boolean;
          create: boolean;
        };
        pipeline: {
          read: boolean;
          create: boolean;
        };
      }
    | { error: string };
  isLoading?: boolean;
} {
  // If no session, return error
  if (!session) {
    return {
      data: { error: 'No session found' },
      isLoading: false,
    };
  }

  // Return mock access data for authenticated users
  return {
    data: {
      homepage: '/dashboard',
      connections: {
        read: true,
        create: true,
      },
      pipeline: {
        read: true,
        create: true,
      },
    },
    isLoading: false,
  };
}
