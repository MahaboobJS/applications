import PendingActionsIcon from '@mui/icons-material/PendingActions';

export const Pending = ({ onClick }: { onClick?: (event: unknown) => void }) => {
  return <PendingActionsIcon onClick={onClick} />;
};
