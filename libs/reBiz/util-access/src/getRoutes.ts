export const API_BASE = '/api/v1';
export const NEXT_PUBLIC_API_INTERNAL_BASE = '/api/internal';
export const API_GRAPHQL_BASE = '/api/graphql';
export const API_INTEGRATION_BASE = '/api/integration';
export const APIS_BASE = [API_BASE, NEXT_PUBLIC_API_INTERNAL_BASE, API_GRAPHQL_BASE];
const AUTH_BASE = '/auth';

type Route = {
  url: string;
  public?: boolean;
  allowSubPaths?: boolean;
};

export const routes: Record<string, Route> = {
  API: {
    url: API_BASE,
    public: true,
  },
  API_ACCESS: {
    url: `${API_BASE}/iam/access`,
    public: true,
  },
  LOGIN: {
    url: `${AUTH_BASE}/signIn`,
    public: true,
  },
  ACCESS_DENIED: {
    url: `${AUTH_BASE}/error/denied`,
    public: true,
  },
  ACCOUNT_NOT_SETUP: {
    url: `${AUTH_BASE}/error/notSetup`,
    public: true,
  },
  ACCOUNT_NO_ACCESS: {
    url: `${AUTH_BASE}/error/noSubscription`,
    public: true,
  },
  DASHBOARD: {
    url: '/dashboard',
  },

  PAGE_ERROR: {
    url: '/error',
    public: true,
  },
  PAGE_ERROR_KNOWN: {
    url: '/error/:id',
    public: true,
  },
} as const;

// since we found the place this was being mutated, and fixed it
// we can start to move back to the simple object
/*
 * @deprecated - use routes directly
 *
 */
export const getRoutes = () => routes;

export type RouteValues = ReturnType<typeof getRoutes>[keyof ReturnType<typeof getRoutes>];
