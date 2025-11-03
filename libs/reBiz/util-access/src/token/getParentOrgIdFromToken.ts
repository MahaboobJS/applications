import { decodedToken } from './decodedToken';

export async function getParentOrgIdFromToken(token: string) {
  const claims = await decodedToken(token);
  if (claims == null) {
    return false;
  }
  return claims.parentOrgId;
}
