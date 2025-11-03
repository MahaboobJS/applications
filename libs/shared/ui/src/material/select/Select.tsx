import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import BaseSelect from '@mui/material/Select';
import type { SxProps } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';

export type SelectOption<OptionValue> = {
  value: OptionValue;
  label: string;
};
type SelectProps<OptionValue> = {
  label: string;
  selectedValue: OptionValue;
  onChange: (event: SelectChangeEvent<OptionValue>) => void;
  options: SelectOption<OptionValue>[];
  layoutSx?: SxProps;
  selectSx?: SxProps;
  includeEmpty?: boolean;
  labelProps?: SxProps;
};
function Select<OptionValue extends string | number>({
  label,
  selectedValue,
  onChange,
  options,
  layoutSx,
  selectSx,
  includeEmpty,
  labelProps,
}: SelectProps<OptionValue>) {
  return (
    <FormControl variant="standard" sx={layoutSx}>
      <InputLabel id={`select-label-${label}`} sx={labelProps}>
        {label}
      </InputLabel>
      <BaseSelect
        labelId={`select-label-${label}`}
        value={selectedValue}
        onChange={onChange}
        label={label}
        sx={selectSx}
      >
        {includeEmpty && (
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </BaseSelect>
    </FormControl>
  );
}

export { Select };
