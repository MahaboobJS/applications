import GridViewIcon from '@mui/icons-material/GridView';

import { ButtonProps, Button } from './Button';

export const Dashboard: React.FC<ButtonProps> = () => {
  return <Button startIcon={<GridViewIcon />} text={'Dashboard'} />;
};
