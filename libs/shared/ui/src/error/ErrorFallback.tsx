import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../material/buttons/Button';

export function ErrorFallback({
  error,
  link,
  resetErrorBoundary,
}: {
  error?: {
    message: string;
  };
  link?: string;
  resetErrorBoundary?: () => void;
}) {
  return (
    <div role="alert">
      <h2>It looks like there has been an error...</h2>
      {error && <pre>{error.message}</pre>}
      <Button onClick={resetErrorBoundary} text="Try again" />
      {link && (
        <p>
          <Link to={link}>Go to the home page</Link>
        </p>
      )}
    </div>
  );
}
