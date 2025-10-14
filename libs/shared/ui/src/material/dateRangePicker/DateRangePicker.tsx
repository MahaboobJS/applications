import React from 'react';

import type { SxProps } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

import { BoxHorizontal } from '../layout/BoxHorizontal';

type DateRangePickerProps = {
  initialStartDate?: Dayjs;
  initialEndDate?: Dayjs;
  setStartDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  datePickerSx?: SxProps;
};

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  initialStartDate = dayjs().subtract(1, 'week'),
  initialEndDate = dayjs(),
  setStartDate,
  setEndDate,
  datePickerSx,
}) => {
  const handleStartDateChange = (date: Dayjs | null) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date: Dayjs | null) => {
    setEndDate(date);
  };

  return (
    <BoxHorizontal sx={{ marginLeft: '10px' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="From"
          value={initialStartDate}
          onChange={handleStartDateChange}
          slotProps={{
            textField: {
              sx: datePickerSx,
              variant: 'outlined',
              size: 'small',
              color: 'primary',
            },
          }}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="To"
          value={initialEndDate}
          onChange={handleEndDateChange}
          slotProps={{
            textField: {
              sx: datePickerSx,
              variant: 'outlined',
              size: 'small',
              color: 'primary',
            },
          }}
        />
      </LocalizationProvider>
    </BoxHorizontal>
  );
};
