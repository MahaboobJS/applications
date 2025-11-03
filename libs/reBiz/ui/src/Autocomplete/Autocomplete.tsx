'use client';
import { Autocomplete as MuiAutocomplete, styled } from '@mui/material';

export const Autocomplete = styled(MuiAutocomplete)({
  '& .MuiAutocomplete-popupIndicatorOpen': {
    transform: 'none !important',
  },
});
