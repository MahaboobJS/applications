import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';

// this is for a future refactor
// it is a much nicer way to handle this
// type Variant = 'normal' | 'compact';
type Spacing = 'some' | 'none';

export const BoxHorizontal = ({
  children,
  sx,
  spacing = 'some',
}: React.PropsWithChildren<{ sx?: SxProps; spacing?: Spacing }>) => {
  const gap = spacing === 'some' ? '10px' : 0;

  return (
    <Box
      sx={{
        gap,
        flexDirection: 'row',
        display: 'flex',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
