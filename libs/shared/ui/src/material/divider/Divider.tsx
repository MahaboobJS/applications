import DividerMaterial from '@mui/material/Divider';

export const Divider = (options: React.ComponentProps<typeof DividerMaterial>) => {
  // set some sensible defaults
  const dividerProps: typeof options = {
    flexItem: true,
    ...options,
  };

  return <DividerMaterial {...dividerProps} />;
};
