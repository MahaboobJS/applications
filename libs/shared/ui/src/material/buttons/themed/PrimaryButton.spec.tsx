import { fireEvent, render, screen } from '@testing-library/react';

import { PrimaryButton } from './PrimaryButton';

describe('PrimaryButton', () => {
  it('renders the button with the provided text', () => {
    const buttonText = 'Click me';
    render(<PrimaryButton text={buttonText} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
  });

  it('applies the "primary" color', () => {
    render(<PrimaryButton text="Click me" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle({ backgroundColor: 'primary' });
  });

  it('handles click events', () => {
    const clickFn = jest.fn();
    render(<PrimaryButton text="Click me" onClick={clickFn} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(clickFn).toHaveBeenCalledTimes(1);
  });
});
