import { castUnknown, castUnknownVariable } from './castUnknown';

describe('castUnknown', () => {
  // correctly casts an object with the specified key
  it('should return the value of the specified key when args is a valid object', () => {
    type TestType = {
      name: string;
      age: number;
    };
    const args: unknown = { name: 'John', age: 30 };
    const result = castUnknown<TestType>(args, 'name');
    expect(result).toBe('John');
  });

  it('should cast a string', () => {
    const value: unknown = 'test';
    expect(castUnknownVariable<string>(value)).toBe<string>('test');
  });

  it('should cast a number', () => {
    const value: unknown = 123;
    expect(castUnknownVariable<number>(value)).toBe<number>(123);
  });

  it('should cast a boolean', () => {
    const value: unknown = true;
    expect(castUnknownVariable<boolean>(value)).toBe<boolean>(true);
  });

  it('should cast false boolean', () => {
    const value: unknown = false;
    expect(castUnknownVariable<boolean>(value)).toBe<boolean>(false);
  });

  it('should cast an object', () => {
    const value: unknown = { key: 'value' };
    expect(castUnknownVariable<{ key: string }>(value)).toEqual({
      key: 'value',
    });
  });

  it('should extract a property from an object', () => {
    const value: unknown = { key: 'value' };
    expect(castUnknown<{ key: string }>(value, 'key')).toBe('value');
  });

  it('should throw an error if the property is not in the object', () => {
    const value: unknown = { key: 'value' };
    // @ts-expect-error we are testing for the missing 'other', so this error is valid
    expect(() => castUnknown<{ key: string }>(value, 'other')).toThrow(
      'Property other is not in args',
    );
  });

  it('should throw an error if the value cannot be cast', () => {
    const value: unknown = Symbol();
    expect(() => castUnknownVariable<string>(value)).toThrow(
      'Cast Unknown could not cast!',
    );
  });

  it('should NOT throw if undefined', () => {
    expect(castUnknownVariable(undefined)).toBeNull();
  });

  it('should handle an object array', () => {
    const result = castUnknownVariable<{ a: boolean }[]>([
      { a: true },
      { a: false },
    ]);

    expect(result?.length).toBe(2);
  });
});
