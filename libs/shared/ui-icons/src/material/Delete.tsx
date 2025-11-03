import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const Delete = ({
  onClick,
  color = 'inherit',
}: {
  onClick?: (event: unknown) => void;
  color?: string;
}) => {
  return <DeleteOutlineOutlinedIcon sx={{ color, cursor: 'pointer' }} onClick={onClick} />;
};
