import { HTTPErrors } from './HTTPErrors';

describe('HTTPErrors', () => {
  test('badRequest', () => {
    const error = HTTPErrors.badRequest();
    expect(error.code).toBe(400);
    expect(error.name).toBe('Bad request');
    expect(error.message).toBe('Bad request');
  });

  test('unauthorized', () => {
    const error = HTTPErrors.unauthorized();
    expect(error.code).toBe(401);
    expect(error.name).toBe('Unauthorized');
    expect(error.message).toBe('Unauthorized');
  });

  test('notFound', () => {
    const error = HTTPErrors.notFound();
    expect(error.code).toBe(404);
    expect(error.name).toBe('Not found');
    expect(error.message).toBe('Not found');
  });

  test('internalError', () => {
    const error = HTTPErrors.internalError();
    expect(error.code).toBe(500);
    expect(error.name).toBe('InternalError');
    expect(error.message).toBe('An internal server error has occurred');
  });

  test('missing', () => {
    const error = HTTPErrors.badRequest('Missing field', 'MissingField', {
      missing: { name: 'Name is required' },
    });
    expect(error.code).toBe(400);
    expect(error.name).toBe('MissingField');
    expect(error.message).toBe('Missing field');
    expect(error.missing).toStrictEqual({ name: 'Name is required' });
  });
});
