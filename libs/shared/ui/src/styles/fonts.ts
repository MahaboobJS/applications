import { css } from 'styled-components';

export const applyFonts = () => css`
  @font-face {
    font-family: 'BebasNeue-Regular';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/BebasNeue-Regular.ttf') format('truetype');
  }
`;

const types = {
  regular: {
    bebas: "'BebasNeue-Regular', sans-serif",
    goodTimes: "'Good Times Regular', sans-serif",
    manifa: "'ManifaRegular', sans-serif",
  },
  bold: {
    manifaTashkeel: "'ManifaBoldHiddenTashkeel', sans-serif",
  },
  semiBold: {
    manifa: "'ManifaSemiBold', sans-serif",
    manifaTashkeel: "'ManifaSemiBoldHiddenTashkeel', sans-serif",
  },
  hefty: { manifa: 'ManifaHefty, sans-serif' },
};

const titleLarge = {
  fontFamily: types.regular.bebas,
  WebkitFontSmoothing: 'antialiased',
};

const titleSmall = {
  fontFamily: types.semiBold.manifa,
  WebkitFontSmoothing: 'antialiased',
};

const sectionHeader = {
  fontFamily: types.hefty.manifa,
  WebkitFontSmoothing: 'antialiased',
};

const sectionHeaderSmall = {
  fontFamily: types.semiBold.manifaTashkeel,
  WebkitFontSmoothing: 'antialiased',
};

const subHeader = {
  fontFamily: types.bold.manifaTashkeel,
  WebkitFontSmoothing: 'antialiased',
};

const subHeaderSmall = {
  fontFamily: types.regular.manifa,
  WebkitFontSmoothing: 'antialiased',
};
const small = {
  fontFamily: types.regular.goodTimes,
  WebkitFontSmoothing: 'antialiased',
};

const typography = {
  sectionHeader,
  sectionHeaderSmall,
  subHeader,
  subHeaderSmall,
  small,
  titleLarge,
  titleSmall,
};

export const fonts = { typography, applyFonts, ...types };
