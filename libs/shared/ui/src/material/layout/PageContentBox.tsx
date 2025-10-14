import type { SxProps } from '@mui/material';
import { Box } from '@mui/material';

import { sizes } from '../../styles/sizes';

export const PageContentBox = ({ children, sx }: React.PropsWithChildren<{ sx?: SxProps }>) => {
  return (
    <Box
      sx={{
        paddingLeft: sizes.pixels._3,
        paddingTop: sizes.pixels._3,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
