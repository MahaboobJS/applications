import { Box } from '@mui/material';

import { TextRegular } from '../Typography';

export function DropdownItem({ name }: Readonly<{ name: string }>) {
  return (
    <Box sx={sx} role="listitem">
      <TextRegular>{name}</TextRegular>
    </Box>
  );
}

const sx = {
  padding: '10px',
  cursor: 'pointer',
};
