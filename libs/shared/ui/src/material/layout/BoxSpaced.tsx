import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';

export const BoxSpaced = ({ children, sx }: React.PropsWithChildren<{ sx?: SxProps }>) => {
  return (
    <Box
      sx={{
        marginBottom: '20px',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
