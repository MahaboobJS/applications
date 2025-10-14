import { signOut } from 'next-auth/react';

import { Buttons } from '@ruyyaan/shared/ui';

function handleLogout() {
  signOut({ callbackUrl: '/auth/signIn' });
}

export function Signout() {
  return (
    <div>
      <Buttons.PrimaryButton onClick={handleLogout} text="Logout" />
    </div>
  );
}
