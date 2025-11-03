import { generateApiSuccess } from '@ruyyaan/rebiz/util-api';

export function GET() {
  return generateApiSuccess({ status: 'ok' });
}
