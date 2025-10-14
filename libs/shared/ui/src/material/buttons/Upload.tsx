import PublishIcon from '@mui/icons-material/Publish';

import { colors } from '../../styles/colors';

import { ButtonProps, Button } from './Button';

export const Upload: React.FC<ButtonProps> = ({ onClick, loading }) => {
  return (
    <Button
      aria-label="Upload"
      onClick={onClick}
      startIcon={<PublishIcon />}
      sx={{
        backgroundColor: colors.surface.interactive.default,
        color: colors.text.interactive.default,
      }}
      text="Upload"
      loading={loading}
    />
  );
};
