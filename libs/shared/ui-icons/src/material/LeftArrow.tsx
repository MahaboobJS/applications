import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export const LeftArrow = ({ onClick }: { onClick?: (event: unknown) => void }) => {
  return <KeyboardArrowLeftIcon aria-label="KeyboardArrowLeft" onClick={onClick} />;
};
