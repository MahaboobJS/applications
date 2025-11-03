import { Button, CircularProgress, type SxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ButtonProps } from './ButtonProps';
import { defaultButtonStyles } from './defaultButtonStyles';

export function PrimaryButton({ loading, ...props }: ButtonProps) {
  const loadingProps = {
    disabled: true,
    endIcon: <CircularProgress color="inherit" size={24} />,
  };

  return (
    <PrimaryButtonStyled
      variant="contained"
      {...props}
      color="primary"
      {...(loading && loadingProps)}
    >
      {props.text}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled(
  Button,
  {}
)(({ theme }) => ({
  ...defaultButtonStyles,
  ...({
    '&:active': {
      backgroundColor: theme.palette.action.active,
    },
    '&:focus': {
      border: `1px solid ${theme.palette.action.focus}`,
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
    },
  } as SxProps),
}));
