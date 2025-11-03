import { AccessRole } from './types';

export const flattenActionsList = (accessRoles: AccessRole[]): string[] => {
  return accessRoles.reduce((acc, role) => {
    return acc.concat(role.AccessAction);
  }, [] as string[]);
};
