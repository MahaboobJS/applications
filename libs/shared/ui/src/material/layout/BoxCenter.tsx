import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';

export const BoxCenter = ({ children, sx }: React.PropsWithChildren<{ sx?: SxProps }>) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
