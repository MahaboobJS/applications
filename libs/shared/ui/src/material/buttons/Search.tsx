import * as React from 'react';

import { Icons } from '@ruyyaan/shared/ui-icons';

import { Button } from './Button';

export const Search: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Button aria-label="Search" text="Search" startIcon={<Icons.Search />} onClick={onClick} />
  );
};
