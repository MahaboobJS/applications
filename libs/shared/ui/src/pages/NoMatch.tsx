import { Link, MemoryRouter } from 'react-router-dom';

export function NoMatch() {
  return (
    <MemoryRouter>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </MemoryRouter>
  );
}
