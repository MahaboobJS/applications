import { type SxProps } from '@mui/material';

import { getIconStyles } from '../getIconStyles';

export const BaseIcon = ({
  Icon,
  onClick,
}: {
  Icon: React.FC<{ sx: SxProps; onClick?: (event: unknown) => void }>;
  onClick?: (event: unknown) => void;
}) => {
  const styles = getIconStyles({ clickable: !!onClick });

  return <Icon onClick={onClick} sx={styles} />;
};
