'use client';
import { type Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const PrimaryLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));
