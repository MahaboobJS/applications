import { render } from '@testing-library/react';

import { ErrorBox } from './ErrorBox';

describe('ErrorBox', () => {
  it('renders error messages correctly', () => {
    const errors = ['OAuthCreateAccount', 'InvalidCredentials'];
    const { getByText } = render(<ErrorBox errors={errors} />);

    expect(getByText('An error occurred while creating your account')).toBeInTheDocument();
    expect(getByText('Unknown error occurred')).toBeInTheDocument();
  });

  it('renders unknown error message for unrecognized error codes', () => {
    const errors = ['UnknownError'];
    const { getByText } = render(<ErrorBox errors={errors} />);

    expect(getByText('Unknown error occurred')).toBeInTheDocument();
  });

  it('renders no error messages when errors array is empty', () => {
    const errors: string[] = [];
    const { queryByText } = render(<ErrorBox errors={errors} />);

    expect(queryByText('An error occurred while creating your account')).toBeNull();
    expect(queryByText('Unknown error occurred')).toBeNull();
  });
});
