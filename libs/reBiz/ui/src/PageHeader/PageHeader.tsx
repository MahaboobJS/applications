'use client';
import { Layout } from '@ruyyaan/shared/ui';
import { withSx } from '@ruyyaan/shared/util-ui';

export const PageHeaderLarge = withSx(Layout.FlexBox)(({ theme }) => ({
  gap: 2,
  alignItems: 'center',
  px: 2,
  py: 2,
  borderBottom: `1px solid ${theme.palette.divider}`,
  height: '71px',
}));

export const PageHeaderSmall = withSx(Layout.BoxHorizontal)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.secondary.light}`,
  justifyContent: 'space-between',
  paddingX: '20px',
}));
