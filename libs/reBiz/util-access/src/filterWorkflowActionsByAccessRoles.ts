import { AccessRole } from '@prisma/client';

import { filterWorkflowActions } from './filterWorkflowActions';
import { flattenActionsList } from './flattenActions';

export const filterWorkflowActionsByAccessRoles = (accessRoles: AccessRole[]): string[] => {
  const actionsList = flattenActionsList(accessRoles);

  return filterWorkflowActions(actionsList);
};
