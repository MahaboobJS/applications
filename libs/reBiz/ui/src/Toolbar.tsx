'use client';
import { type Theme, Toolbar as MaterialToolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Toolbar = styled(
  MaterialToolbar,
  {}
)(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.palette.secondary.light}`,
  height: '70px',
}));
