// Simplified data-access-api for authentication only
import type { Session } from 'next-auth';

// Simple mock implementation for useGetAccessQuery
export function useGetAccessQuery(session?: Session | null): {
  data?: {
    homepage: string;
    permit: {
      read: boolean;
      create: boolean;
      issuer: boolean;
      receiver: boolean;
      gasTester: boolean;
      preWorkGasTester: boolean;
      interimWorkGasTester: boolean;
      postWorkGasTester: boolean;
    };
    mainMenu: {
      permit: boolean;
      gastester: boolean;
      notifications: boolean;
      admin: boolean;
      profile: boolean;
      myPermits: boolean;
      monitoring: boolean;
    };
  } | { error: string };
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
      permit: {
        read: true,
        create: true,
        issuer: true,
        receiver: true,
        gasTester: true,
        preWorkGasTester: true,
        interimWorkGasTester: true,
        postWorkGasTester: true,
      },
      mainMenu: {
        permit: true,
        gastester: true,
        notifications: true,
        admin: true,
        profile: true,
        myPermits: true,
        monitoring: true,
      },
    },
    isLoading: false,
  };
}