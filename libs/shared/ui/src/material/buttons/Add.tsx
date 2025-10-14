import AddIcon from '@mui/icons-material/Add';

import { ButtonProps, Button } from './Button';

export const Add: React.FC<ButtonProps> = ({ text }) => {
  return <Button startIcon={<AddIcon />} text={text || 'Add'} />;
};
