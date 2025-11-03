import mapValues from 'lodash/mapValues';

const borderSizesRaw = {
  _1: 8,
  _2: 10,
};

export const generic = {
  borderSizesRaw,
  borderSizesPixels: mapValues(borderSizesRaw, (value) => `${value}px`),
};
