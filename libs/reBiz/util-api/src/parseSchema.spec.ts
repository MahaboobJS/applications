import { z } from 'zod';

import { parseSchema } from './parseSchema';

describe('parseSchema', () => {
  const schema = z.object({
    name: z.string(),
    age: z.number(),
    email: z.string().email(),
  });

  it('should parse the schema without empty values', () => {
    const data = {
      name: 'Billy Corgan',
      age: 30,
      email: 'billy@ruyyaan.com',
    };

    const result = parseSchema({
      data,
      schema,
      requiredFields: ['name', 'email'],
    });

    expect(result).toEqual({
      name: 'Billy Corgan',
      email: 'billy@ruyyaan.com',
    });
  });

  it('should throw an error if required fields are missing', () => {
    const data = {
      name: 'James Iha',
      age: 30,
    };

    expect(() => {
      parseSchema({ data, schema, requiredFields: ['name', 'email'] });
    }).toThrow();
  });

  it('should throw an error if email is invalid', () => {
    const data = {
      name: 'Jimmy Chamberlin',
      age: 30,
      email: 'invalid-email',
    };

    expect(() => {
      parseSchema({ data, schema, requiredFields: ['name', 'email'] });
    }).toThrow();
  });
});
