import CloseOutlined from '@mui/icons-material/CloseOutlined';
import type { SxProps } from '@mui/material';

export const Cancel = ({ onClick, sx }: { onClick?: (event: unknown) => void; sx?: SxProps }) => {
  return <CloseOutlined sx={{ cursor: 'pointer', ...sx }} onClick={onClick} />;
};
