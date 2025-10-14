import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';

export const BoxRelative = ({ children, sx }: React.PropsWithChildren<{ sx?: SxProps }>) => {
  return (
    <Box
      sx={{
        position: 'relative',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
