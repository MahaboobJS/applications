declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    __ENV: { [key: string]: string };
  }
}

/**
 * Reads environment variables based on the execution context.
 *
 * - **Server-Side**: Accesses `process.env` for environment variables.
 * - **Client-Side**: Reads from `window.__ENV` where environment variables are injected by `next-runtime-env`
 *
 * This function helps manage environment variables in a type-safe way, accounting for differences
 * between server-side and client-side execution.
 *
 * @param key - The key of the environment variable to retrieve.
 * @returns The value of the environment variable or `undefined` if not found.
 */

const readVariable = (key: string): string | undefined => {
  if (typeof window === 'undefined') {
    // Server-side: read from process.env
    return process.env[key];
  }

  // Client-side: read from window.__ENV
  if (!window.__ENV?.[key]) {
    console.warn(`Environment variable ${key} not found in window.__ENV..`);
  }
  return window.__ENV?.[key];
};

export default readVariable;
