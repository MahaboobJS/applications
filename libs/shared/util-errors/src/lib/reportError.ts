export function reportError(
  error: Error | Response | unknown,
  message = 'Unhandled error',
) {
  console.error(`Error: ${message}`, error);
}
