import type { SxProps } from '@mui/material';

import { FlexBox } from './FlexBox';
export function Edges({ children, sx }: React.PropsWithChildren<{ sx?: SxProps }>) {
  return (
    <FlexBox
      sx={{
        justifyContent: 'space-between',
        ...sx,
      }}
    >
      {children}
    </FlexBox>
  );
}
