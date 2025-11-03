import { type ButtonProps as MaterialButtonProps } from '@mui/material';

export type ButtonProps = {
  text?: string;
  loading?: boolean;
} & Omit<MaterialButtonProps, 'style' | 'sx'>;
