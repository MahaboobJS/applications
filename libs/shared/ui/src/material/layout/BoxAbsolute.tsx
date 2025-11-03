import Box from '@mui/material/Box';
import type { SxProps } from '@mui/material';

export const BoxAbsolute = ({ children, sx }: React.PropsWithChildren<{ sx?: SxProps }>) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
