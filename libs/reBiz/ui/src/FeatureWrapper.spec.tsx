import { render, screen } from '@testing-library/react';

import { FeatureWrapper } from './FeatureWrapper';

describe('FeatureWrapper', () => {
  it('should render children successfully', () => {
    render(
      <FeatureWrapper>
        <div>test</div>
      </FeatureWrapper>
    );

    expect(screen.getByText('test')).toBeTruthy();
  });
});
