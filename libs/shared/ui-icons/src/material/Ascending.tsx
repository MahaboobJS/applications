import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Ascending = ({ onClick }: { onClick?: (event: unknown) => void }) => {
  return <KeyboardArrowUpIcon aria-label="Sort Ascending" onClick={onClick} />;
};
