import EditIcon from '@mui/icons-material/EditOutlined';
import { type Theme, styled } from '@mui/material';

export const Edit = ({
  onClick,
  muted,
}: {
  onClick?: (event: unknown) => void;
  muted?: boolean;
}) => {
  if (muted) {
    return <MutedIcon onClick={onClick} />;
  }

  return <PrimaryIcon onClick={onClick} />;
};

const MutedIcon = styled(
  EditIcon,
  {}
)(({ theme }: { theme: Theme }) => ({
  cursor: 'pointer',
  color: theme.palette.grey[400],
}));

const PrimaryIcon = styled(
  EditIcon,
  {}
)(({ theme }: { theme: Theme }) => ({
  cursor: 'pointer',
  color: theme.palette.primary.main,
}));
