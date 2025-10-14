import { env } from '@ruyyaan/reBiz/util-env';

export const isKeycloakEnabled = () => {
  return env.NEXT_PUBLIC_ENABLE_KEYCLOAK_LOGIN === 'true';
};
