'use client';
import { type Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const SecondaryLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  textDecoration: 'none',
  color: theme.palette.secondary.main,
}));
