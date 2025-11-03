'use client';
import Link from 'next/link';

import { type Theme } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SecondaryLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  textDecoration: 'none',
  color: theme.palette.secondary.main,
}));
