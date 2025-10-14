'use client';
import React from 'react';

import { type SxProps } from '@mui/material';
import { usePathname } from 'next/navigation';

import { BreadcrumbItem, Breadcrumbs as CntxtBreadcrumbs } from '@ruyyaan/shared/ui';

import { TextRegular } from '../Typography';

export const Breadcrumbs: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter((item) => item !== '');

  const breadcrumbs: BreadcrumbItem[] = segments.map((item, index) => {
    const pathSegments = segments.slice(0, index + 1);
    const singlePath = `/${pathSegments.join('/')}`;

    return {
      disabled: index === segments.length - 1,
      label: item,
      href: singlePath,
    };
  });

  return <CntxtBreadcrumbs sx={sx} items={breadcrumbs} CustomTextComponent={TextRegular} />;
};

export default Breadcrumbs;
