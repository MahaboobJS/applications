import { env } from '@ruyyaan/reBiz/util-env';

export const isE2EEnabled = () => {
  return env.NEXT_PUBLIC_ENABLE_E2E === 'true';
};
