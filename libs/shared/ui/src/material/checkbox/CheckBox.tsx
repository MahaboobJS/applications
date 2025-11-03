
import React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { SxProps } from '@mui/system';

export const CheckBox: React.FC<{
  label: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  labelSx?: SxProps;
  checkboxSx?: SxProps;
}> = ({ label, checked, onChange, labelSx, checkboxSx }) => {
  const handleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} sx={checkboxSx} />}
      label={label}
      sx={labelSx}
    />
  );
};
