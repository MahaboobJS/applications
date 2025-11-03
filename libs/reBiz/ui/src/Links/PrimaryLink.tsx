'use client';
import Link from 'next/link';

import { type Theme } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PrimaryLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));
