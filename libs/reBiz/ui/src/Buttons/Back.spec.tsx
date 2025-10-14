import { render, screen } from '@testing-library/react';

import { BackButton } from './Back';

describe('Back', () => {
  it('should have the text', () => {
    render(<BackButton onClick={jest.fn()} />);
    expect(screen.getByText(/Back/)).toBeTruthy();
  });
});
