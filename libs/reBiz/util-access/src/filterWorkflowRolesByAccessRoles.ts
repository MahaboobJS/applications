import { AccessRole } from '@prisma/client';

import { filterWorkflowRoles } from './filterWorkflowRoles';
import { flattenActionsList } from './flattenActions';

export const filterWorkflowRolesByAccessRoles = (accessRoles: AccessRole[]): string[] => {
  const actionsList = flattenActionsList(accessRoles);

  return filterWorkflowRoles(actionsList);
};
