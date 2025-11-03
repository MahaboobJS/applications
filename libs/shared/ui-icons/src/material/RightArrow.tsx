import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const RightArrow = ({ onClick }: { onClick?: (event: unknown) => void }) => {
  return <KeyboardArrowRightIcon aria-label="KeyboardArrowRight" onClick={onClick} />;
};
