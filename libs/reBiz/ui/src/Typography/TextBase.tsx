
import * as React from 'react';

import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const weightMap = {
  light: 300,
  normal: 400,
  semiBold: 500,
  bold: 600,
};

type BaseProps = {
  variant?: 'normal' | 'title' | 'muted' | 'inverted' | 'error';
  weight?: keyof typeof weightMap;
  color?: string;
};

export const TextBase = React.forwardRef<
  HTMLSpanElement,
  Readonly<React.PropsWithChildren<{ sizes: [number, number] } & BaseProps>>
>(({ sizes, variant, weight, children, color, ...props }, ref) => {
  const theme = useTheme();

  const variantMap: Record<NonNullable<BaseProps['variant']>, string> = {
    normal: theme.palette.text.primary,
    title: theme.palette.primary.main,
    muted: theme.palette.text.disabled,
    inverted: theme.palette.common.white,
    error: theme.palette.error.main,
  };

  return (
    <Typography
      ref={ref}
      sx={{
        fontSize: `${sizes[0]}rem`,
        lineHeight: `${sizes[1]}rem`,
        color: color || variantMap[variant || 'normal'],
        fontWeight: weightMap[weight || 'normal'],
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
      {...props}
    >
      {children}
    </Typography>
  );
});

export type TextProps = Readonly<Omit<React.ComponentProps<typeof TextBase>, 'sizes'>>;
