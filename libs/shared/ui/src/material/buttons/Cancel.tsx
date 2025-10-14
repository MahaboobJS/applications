import { Icons } from '@ruyyaan/shared/ui-icons';

import { colors } from '../../styles/colors';

import { ButtonProps, Button } from './Button';

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
