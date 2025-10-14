import mapValues from 'lodash/mapValues';

const raw = {
  _1: 8,
  _2: 12,
  _25: 20,
  _3: 28,
  _4: 32, // not used
  _5: 60,
};

export const sizes = {
  raw,
  pixels: mapValues(raw, (value) => `${value}px`),
};
