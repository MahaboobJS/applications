import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const DropDownArrow = ({ onClick }: { onClick?: (event: unknown) => void }) => {
  return <ArrowDropDownIcon aria-label="Down Icon" onClick={onClick} />;
};
