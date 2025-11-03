'use client';

import CloseOutlined from '@mui/icons-material/CloseOutlined';
import type { SxProps } from '@mui/material';

import { IconsList, iconComponents } from './icons.list';



type Props = { iconName: IconsList; sx?: SxProps };

export const Icon = ({ iconName, sx }: Props) => {
  const MuiIcon = iconComponents[iconName];

  if (!MuiIcon) {
    console.error('Icon not found:', iconName);
    return <CloseOutlined sx={{ color: 'red' }} />;
  }

  return <MuiIcon sx={sx} />;
};
