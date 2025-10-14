import * as React from 'react';

import TextField from '@mui/material/TextField';

type Props = {
  text: string;
  sx?: React.CSSProperties;
  error?: boolean;
};
export const DisabledTextField: React.FC<Props> = ({ text, sx, error = false }) => {
  return (
    <TextField
      sx={sx}
      error={error}
      variant="filled"
      hiddenLabel
      disabled
      size="small"
      value={text}
    />
  );
};
