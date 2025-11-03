
import { ReactNode } from 'react';

import AutocompleteMaterial from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { Icons } from '@ruyyaan/shared/ui-icons';

type Props<T> = {
  data: T[];
  id: string;
  onSelect: (
    event: React.SyntheticEvent,
    newValue: (T & { id: number; label?: string }) | string | null
  ) => void;
  onInputChange: (event: React.SyntheticEvent<Element, Event>, value: string) => void;
  isFreeSolo?: boolean;
  popupIcon?: ReactNode;
  label?: string;
};
export const Autocomplete = <T extends { id: number; label?: string }>({
  data,
  id,
  onSelect,
  onInputChange,
  isFreeSolo = false,
  popupIcon = <Icons.DropDownArrow />,
  label = '',
}: Props<T>) => {
  return (
    <AutocompleteMaterial<T, false, false, typeof isFreeSolo>
      freeSolo={isFreeSolo}
      disablePortal
      id={`select-${id}`}
      options={data}
      sx={{ width: 300 }}
      renderInput={(params) => {
        return <TextField label={label} {...params} />;
      }}
      onChange={(event: React.SyntheticEvent, newValue: T | string | null) => {
        onSelect(event, newValue);
      }}
      onInputChange={(event: React.SyntheticEvent, value: string) => {
        onInputChange(event, value);
      }}
      popupIcon={popupIcon}
    />
  );
};
