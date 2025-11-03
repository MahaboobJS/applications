import { render } from '@testing-library/react';

import { TreeView } from './treeView';

describe('TreeView', () => {
  it('should render successfully', () => {
    const data = { id: '1', name: 'test' };
    const { baseElement } = render(<TreeView data={data} />);
    expect(baseElement).toBeTruthy();
  });
});
