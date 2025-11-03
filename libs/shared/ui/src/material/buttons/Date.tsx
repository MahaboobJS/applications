import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { ButtonProps, Button } from './Button';

export const Date: React.FC<ButtonProps> = () => {
  return <Button startIcon={<CalendarMonthIcon />} text={'Date'} />;
};
