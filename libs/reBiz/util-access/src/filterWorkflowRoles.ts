import { filterWorkflowActions } from './filterWorkflowActions';

export const filterWorkflowRoles = (actions: string[] | Record<string, string>) => {
  return filterWorkflowActions(actions, 'WORKFLOW_ROLE');
};
