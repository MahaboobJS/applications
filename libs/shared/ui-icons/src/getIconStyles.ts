export const getIconStyles = ({ clickable }: { clickable?: boolean }) => {
  return { cursor: clickable ? 'pointer' : 'default' };
};
