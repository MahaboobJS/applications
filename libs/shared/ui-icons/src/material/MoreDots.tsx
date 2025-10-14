import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export function MoreDots({
  onClick,
  color,
}: {
  readonly onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  readonly color?: string;
}) {
  return <MoreHorizIcon sx={{ color }} aria-label="More Information" onClick={onClick} />;
}
