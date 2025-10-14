export const API_BASE = '/api/v1';
export const NEXT_PUBLIC_API_INTERNAL_BASE = '/api/internal';
export const API_GRAPHQL_BASE = '/api/graphql';
export const API_INTEGRATION_BASE = '/api/integration';
export const APIS_BASE = [API_BASE, NEXT_PUBLIC_API_INTERNAL_BASE, API_GRAPHQL_BASE];

const PERMIT_BASE = '/permits';
const ADMIN_BASE = '/admin';
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
  WORKFLOW_EDIT: {
    url: `${PERMIT_BASE}/:id`,
  },
  PERMIT_SCHEDULE: {
    url: `${PERMIT_BASE}`,
  },
  PERMIT_ADD_NEW: {
    url: `${PERMIT_BASE}`,
  },
  WORKFLOW_HISTORY: {
    url: `${PERMIT_BASE}/history/:id`,
  },
  WORKFLOW_PRINT: {
    url: `${PERMIT_BASE}/print/:id`,
  },
  GAS_TESTER: {
    url: `${PERMIT_BASE}/gasTester`,
  },
  NOTIFICATIONS: {
    url: '/notifications',
  },
  USER_PROFILE: {
    url: '/user',
  },
  ADMIN: {
    url: `${ADMIN_BASE}/dashboard`,
  },
  ADMIN_GLOBAL_USERS: {
    url: `${ADMIN_BASE}/global/users`,
  },
  ADMIN_GLOBAL_USERS_UNASSIGNED: {
    url: `${ADMIN_BASE}/global/unassigned`,
  },
  ADMIN_GLOBAL_USER_EDIT: {
    url: `${ADMIN_BASE}/global/users/:id`,
  },
  ADMIN_ORGANIZATION_EDIT: {
    public: true,
    url: `${ADMIN_BASE}/global/orgs/:id`,
  },
  ADMIN_GLOBAL_ORGANIZATIONS: {
    url: `${ADMIN_BASE}/global/orgs`,
  },
  ADMIN_GLOBAL_ROLES: {
    url: `${ADMIN_BASE}/global/roles`,
  },
  ADMIN_CREATE_USER: {
    url: `${ADMIN_BASE}/users/create`,
  },
  ADMIN_EDIT_USER: {
    url: `${ADMIN_BASE}/users/:id`,
  },
  ADMIN_USERS: {
    url: `${ADMIN_BASE}/orgs/:id/users`,
  },
  ADMIN_USERS_ASSIGN: {
    url: `${ADMIN_BASE}/orgs/:id/users/assign`,
  },
  ADMIN_ORGANIZATIONS: {
    url: `${ADMIN_BASE}/orgs`,
  },
  ADMIN_ORGANIZATIONS_WORKFLOWS: {
    url: `${ADMIN_BASE}/orgs/:id/workflows`,
  },
  ADMIN_ORGANIZATIONS_EDIT: {
    url: `${ADMIN_BASE}/orgs/:id`,
  },
  ADMIN_ORGANIZATIONS_CREATE: {
    url: `${ADMIN_BASE}/orgs/create`,
  },
  ADMIN_ROLES: {
    url: `${ADMIN_BASE}/roles`,
  },
  ADMIN_ROLE_EDIT: {
    url: `${ADMIN_BASE}/roles/:id`,
  },
  ADMIN_ROLE_CREATE: {
    url: `${ADMIN_BASE}/roles/create`,
  },
  ADMIN_DOCS: {
    url: `${ADMIN_BASE}/docs`,
  },
  ADMIN_DOC: {
    url: `${ADMIN_BASE}/docs/:id`,
  },
  ADMIN_LOCATIONS: {
    url: `${ADMIN_BASE}/locations`,
  },
  ADMIN_LOCATIONS_CREATE: {
    url: `${ADMIN_BASE}/locations/create`,
  },
  ADMIN_LOCATION_REGIONS: {
    url: `${ADMIN_BASE}/locations/:id/regions`,
  },
  PAGE_ERROR: {
    url: '/error',
    public: true,
  },
  PAGE_ERROR_KNOWN: {
    url: '/error/:id',
    public: true,
  },
  PERMIT_MONITORING: {
    url: '/monitoring',
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
