import Box from '@mui/material/Box';
import type { SxProps } from '@mui/material';

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
