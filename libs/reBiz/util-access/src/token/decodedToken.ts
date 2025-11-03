import { decodeJwt } from 'jose';

export async function decodedToken(token: string | null) {
  if (token === null) {
    console.error('token not found');
    return null;
  }
  const jwt = await decodeJwt(token.replace('Bearer ', ''));
  if (jwt) {
    return jwt;
  } else {
    console.error('Invalid token');
  }
}
