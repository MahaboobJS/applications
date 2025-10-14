import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { styled, type Theme } from '@mui/material';

import { BaseIcon } from './BaseIcon';
import { IconProps } from './types';

export const User = (
  { onClick, variant, weight }: IconProps = {
    variant: 'normal',
    weight: 'normal',
  }
) => {
  const Icon = variant === 'outlined' ? PersonOutlineIcon : PersonIcon;

  if (weight === 'muted') {
    return <MutedIcon Icon={Icon} onClick={onClick} />;
  }

  return <PrimaryIcon Icon={Icon} onClick={onClick} />;
};

const MutedIcon = styled(
  BaseIcon,
  {}
)(({ theme }: { theme: Theme }) => ({
  cursor: 'pointer',
  color: theme.palette.grey[200],
}));

const PrimaryIcon = styled(
  BaseIcon,
  {}
)(({ theme }: { theme: Theme }) => ({
  cursor: 'pointer',
  color: theme.palette.primary.main,
}));
