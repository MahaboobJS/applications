import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Descending = ({
  onClick,
  theme,
}: {
  onClick?: (event: unknown) => void;
  theme: string;
}) => {
  return (
    <KeyboardArrowDownIcon sx={{ color: theme }} aria-label="Sort Descending" onClick={onClick} />
  );
};
