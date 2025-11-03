import React from 'react';

import { Paper, Tooltip } from '@mui/material';
import type { SxProps } from '@mui/material';

export const Chip: React.FC<
  React.PropsWithChildren<{
    text?: string;
    sx?: SxProps;
    tooltip?: string;
    onClick?: () => void;
  }>
> = ({ text, sx, tooltip, children, onClick }) => {
  return (
    <Tooltip title={tooltip || text}>
      <Paper
        onClick={onClick}
        elevation={0}
        sx={{
          textAlign: 'center',
          padding: '7px',
          height: '36px',
          borderRadius: '6px',
          ...sx,
        }}
      >
        {children}
        {text}
      </Paper>
    </Tooltip>
  );
};
