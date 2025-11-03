import Box from '@mui/material/Box';
import type { SxProps } from '@mui/material';

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
