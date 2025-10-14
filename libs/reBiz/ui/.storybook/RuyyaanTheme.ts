import { create } from '@storybook/theming';

import logo from './logo.png';
export const light = create({
  base: 'light',
  // TypographyRuyyaanTheme
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Ruyyaan Storybook',
  brandUrl: 'https://ruyyaan.com/',
  brandImage: `${logo}`,
  brandTarget: '_self',
});
