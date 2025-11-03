import SearchIcon from '@mui/icons-material/Search';

export const Search = ({ onClick }: { onClick?: (event: unknown) => void }) => {
  return <SearchIcon aria-label="Search Icon" onClick={onClick} />;
};
