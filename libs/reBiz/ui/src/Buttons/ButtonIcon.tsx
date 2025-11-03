import Link from 'next/link';

import { useTheme } from '@mui/material';

import { Icon, IconsList } from '@ruyyaan/shared/ui-icons';

export function ButtonIcon({ link, icon }: Readonly<{ link: string; icon: IconsList }>) {
  const theme = useTheme();

  return (
    <Link
      href={link}
      style={{
        color: theme.palette.primary.light,
        display: 'flex',
        borderRadius: '4px',
        padding: '6px',
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Icon iconName={icon} sx={{ color: 'inherit' }} />
    </Link>
  );
}
