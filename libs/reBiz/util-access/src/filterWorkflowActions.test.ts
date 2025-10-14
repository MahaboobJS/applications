import { filterWorkflowActions } from './filterWorkflowActions';

describe('filterWorkflowActions', () => {
  it("filters actions that start with 'WORKFLOW_'", () => {
    const actions = ['WORKFLOW_CREATE', 'APPROVE', 'WORKFLOW_UPDATE', 'REJECT', 'WORKFLOW_DELETE'];
    const filteredActions = filterWorkflowActions(actions);
    expect(filteredActions).toEqual(['WORKFLOW_CREATE', 'WORKFLOW_UPDATE', 'WORKFLOW_DELETE']);
  });

  it("returns an empty array if no actions start with 'WORKFLOW_'", () => {
    const actions = ['APPROVE', 'REJECT'];
    const filteredActions = filterWorkflowActions(actions);
    expect(filteredActions).toEqual([]);
  });

  it('works with enums as well', () => {
    enum PossibleWorkflowActions {
      'WORKFLOW_TEST' = 'WORKFLOW_TEST',
      'OTHER_THING' = 'OTHER_THING',
    }
    const filteredActions = filterWorkflowActions(PossibleWorkflowActions);
    expect(filteredActions).toEqual(['WORKFLOW_TEST']);
  });
});
