export function castUnknown<T>(
  args: unknown,
  key: keyof T,
  returnObject: true,
): T;
export function castUnknown<T>(
  args: unknown,
  key: keyof T,
  returnObject?: false,
): T[keyof T];
export function castUnknown<T>(
  args: unknown,
  key: keyof T,
  returnObject?: boolean,
): T | T[keyof T] {
  const castedArgs = args as T;
  if (castedArgs && typeof castedArgs === 'object' && key in castedArgs) {
    if (returnObject) {
      return castedArgs;
    }
    return castedArgs[key];
  }

  if (typeof key === 'string') {
    throw new Error(`Property ${key} is not in args`);
  }
  throw new Error(`Cast Unknown could not cast!`);
}

/**
 * try and cast this variable to something we expect
 *
 * it will fail if does not work
 *
 * Usage:
 *
 *   const aString = castUnknownVariable<string>(possibleString);
 *
 */
export function castUnknownVariable<T>(value: unknown): T | null {
  const castedValue = value as T;

  if (castedValue === undefined || castedValue === null) {
    return null;
  }

  if (typeof castedValue === 'string') {
    return castedValue as T;
  }

  if (typeof castedValue === 'number') {
    return castedValue as T;
  }

  if (typeof castedValue === 'boolean') {
    return castedValue as T;
  }

  if (castedValue && typeof castedValue === 'object') {
    return castedValue;
  }

  throw new Error(`Cast Unknown could not cast!`);
}
