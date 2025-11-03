import * as React from 'react';

import { Icons } from '@ruyyaan/shared/ui-icons';

import { Button } from './Button';

export const Logout: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Button aria-label="Logout" text="Logout" startIcon={<Icons.Logout />} onClick={onClick} />
  );
};
