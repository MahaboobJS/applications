
import * as React from 'react';

import Link from 'next/link';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme, type SxProps } from '@mui/material';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

import { Typography } from '../typography';

export type BreadcrumbItem = {
  label: string;
  href: string;
  disabled: boolean;
};

type Props = React.PropsWithChildren<{
  items: BreadcrumbItem[];
  CustomTextComponent?: React.ComponentType<{ children: React.ReactNode }>;
  sx?: SxProps;
}>;
export const Breadcrumbs: React.FC<Props> = ({ items, CustomTextComponent, sx, children }) => {
  const theme = useTheme();
  const TextComponent = CustomTextComponent || Typography.General.Text;

  const breadcrumbItems = items.map((item) => {
    const label = item.label.charAt(0).toUpperCase() + item.label.slice(1);
    return {
      ...item,
      label,
    };
  });

  return (
    <MuiBreadcrumbs
      sx={sx}
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {breadcrumbItems.map((item) =>
        item.disabled ? (
          <TextComponent key={item.href} text={item.label}>
            {item.label}
          </TextComponent>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            style={{
              textDecoration: 'none',
              color: theme.palette.primary.main,
            }}
          >
            {item.label}
          </Link>
        )
      )}
      {children}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
