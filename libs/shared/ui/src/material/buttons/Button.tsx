import LoadingButton from '@mui/lab/LoadingButton';
import {
  CircularProgress,
  type ButtonProps as MaterialButtonProps,
  type SxProps,
} from '@mui/material';

import { colors } from '../../styles/colors';
import { Typography } from '../typography';

export type ButtonProps = {
  text?: string;
  loading?: boolean;
} & MaterialButtonProps;

export const defaultButtonStyles: SxProps = {
  textTransform: 'none',
  border: `1px solid ${colors.border.default}`,
  height: '35px',
  borderRadius: '6px',
  '&& svg': {
    fontSize: '17px',
  },
  '&:hover': {
    color: colors.text.interactive.hover,
    border: colors.border.interactive.hover,
    background: colors.surface.interactive.hover,
  },
};

export const Button: React.FC<ButtonProps> = ({ text, loading, ...otherProps }) => {
  const loadingProps = {
    disabled: true,
    endIcon: <CircularProgress size={24} />,
  };

  return (
    <LoadingButton
      variant="outlined"
      {...otherProps}
      sx={{ ...defaultButtonStyles, ...otherProps.sx }}
      {...(loading && loadingProps)}
    >
      <Typography.General.Subtitle text={text || ''} sx={otherProps?.sx} />
    </LoadingButton>
  );
};
