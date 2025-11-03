import { Icons } from '@ruyyaan/shared/ui-icons';

import { ButtonProps, Button } from './Button';
import { colors } from '../../styles/colors';


export const Cancel: React.FC<ButtonProps> = ({ text }) => {
  return (
    <Button
      startIcon={<Icons.Cancel />}
      text={text || 'Cancel'}
      sx={{
        backgroundColor: colors.surface.default,
        color: colors.text.default,
      }}
    />
  );
};
