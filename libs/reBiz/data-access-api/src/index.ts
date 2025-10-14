import type { Session } from 'next-auth';
import type { Access } from '@ruyyaan/reBiz/util-access';

export function useGetAccessQuery(_session?: Session | null): {
  data?: Access | { error: string };
  isLoading?: boolean;
} {
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
