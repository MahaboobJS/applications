export const handleException = (error: unknown): string => {
  if (typeof error === 'object' && error && 'message' in error) {
    return error.message as string;
  }
  return error as string;
};
