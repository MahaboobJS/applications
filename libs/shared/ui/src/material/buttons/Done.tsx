import { colors } from '../../styles/colors';

import { ButtonProps, Button } from './Button';

export const Done: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button
      aria-label="Done"
      onClick={onClick}
      sx={{
        backgroundColor: colors.surface.interactive.default,
        color: colors.text.interactive.default,
      }}
      text="Done"
    />
  );
};
