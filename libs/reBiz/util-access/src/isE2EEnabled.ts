import { env } from '@ruyyaan/rebiz/util-env';

export const isE2EEnabled = () => {
  return env.NEXT_PUBLIC_ENABLE_E2E === 'false';
};
