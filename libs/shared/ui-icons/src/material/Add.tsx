import AddIcon from '@mui/icons-material/Add';
import { type Theme, styled } from '@mui/material/styles';

export const Add = styled(
  AddIcon,
  {}
)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.grey[400],
}));
