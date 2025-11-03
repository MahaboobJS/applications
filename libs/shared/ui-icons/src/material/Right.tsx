import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { OverridableStringUnion } from '@mui/types';

export const Right = ({
  onClick,
  color,
  fontSize = 'large',
}: {
  onClick?: (event: unknown) => void;
  color?: string;
  fontSize?: OverridableStringUnion<'inherit' | 'large' | 'medium' | 'small'>;
}) => {
  return (
    <ChevronRightIcon aria-label="Inspect" onClick={onClick} fontSize={fontSize} sx={{ color }} />
  );
};
