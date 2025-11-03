import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import type { SxProps } from '@mui/material';

type Props = {
  sx: SxProps;
};

export const Card: React.FC<React.PropsWithChildren<Props>> = ({ children, sx }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '210px',
        height: '234.67px',
        borderRadius: '12px',
        ...sx,
      }}
    >
      <CardContent sx={{ height: '100%' }}>{children}</CardContent>
    </Paper>
  );
};
