// Test utilities for shared libraries
export const testWithMockedError = (error: Error) => {
  return error;
};

export const mockError = (message: string) => {
  return new Error(message);
};

export const createMockFunction = <T extends (...args: any[]) => any>(implementation?: T) => {
  return jest.fn(implementation);
};

