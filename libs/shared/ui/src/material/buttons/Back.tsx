import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { ButtonProps, Button } from './Button';

export const Back: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button
      aria-label="Back"
      onClick={onClick}
      startIcon={<ArrowBackIcon />}
      sx={{
        padding: '0px 0px 0px 12px',
        minWidth: '0px',
        marginTop: '-5px',
      }}
      disableRipple
    />
  );
};
