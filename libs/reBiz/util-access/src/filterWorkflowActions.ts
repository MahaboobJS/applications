export const filterWorkflowActions = (
  actions: string[] | Record<string, string>,
  prefix = 'WORKFLOW_'
) => {
  return Object.values(actions).filter((action) => action.startsWith(prefix));
};
