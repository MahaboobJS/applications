import { Button, type SxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ButtonProps } from './ButtonProps';
import { defaultButtonStyles } from './defaultButtonStyles';

export function TertiaryButton(props: ButtonProps) {
  return (
    <TertiaryButtonStyled variant="text" {...props} role="button" color={props.color || 'primary'}>
      {props.text}
    </TertiaryButtonStyled>
  );
}

const TertiaryButtonStyled = styled(
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
