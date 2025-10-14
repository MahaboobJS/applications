import { jwtVerify, createRemoteJWKSet } from 'jose';

const verifyJwt = async (token: string): Promise<boolean | null> => {
  try {
    const JWK = createRemoteJWKSet(new URL(process.env['REBIZ_APP_AUTH_KEYCLOAK_CERTS'] ?? ''));

    await jwtVerify(token, JWK, {
      issuer: process.env['REBIZ_APP_AUTH_KEYCLOAK_ISSUER'] ?? '',
      audience: process.env['REBIZ_APP_AUTH_KEYCLOAK_AUD'] ?? '',
    });
    return true;
  } catch (error) {
    console.error('JWT verification failed with key:', error);
  }

  return false;
};

export async function verifyKeycloakToken(token: string) {
  if (!token) {
    return false;
  }

  const validateToken = await verifyJwt(token.replace('Bearer ', ''));
  if (validateToken === false) {
    return false;
  }

  return true;
}
