import type { SxProps } from '@mui/material';

import { Card } from './Card';
import { colors } from '../../styles/colors';




type Props = {
  sx?: SxProps;
};

export const Clear: React.FC<React.PropsWithChildren<Props>> = ({ children, sx }) => {
  return (
    <Card
      sx={{
        background: colors.surface.muted,
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};
