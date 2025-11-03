import { Button, type SxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ButtonProps } from './ButtonProps';
import { defaultButtonStyles } from './defaultButtonStyles';

export function SecondaryButton(props: ButtonProps) {
  return (
    <SecondaryButtonStyled variant="outlined" {...props} role="button">
      {props.text}
    </SecondaryButtonStyled>
  );
}

const SecondaryButtonStyled = styled(
  Button,
  {}
)(({ theme }) => ({
  ...defaultButtonStyles,
  ...({
    '&:active': {
      border: `1px solid ${theme.palette.action.active}`,
      color: theme.palette.action.active,
    },
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.dark}`,
      color: theme.palette.secondary.dark,
    },
    '&.Mui-disabled': {
      border: `1px solid ${theme.palette.action.disabled}`,
      color: theme.palette.action.disabled,
    },
  } as SxProps),
}));
