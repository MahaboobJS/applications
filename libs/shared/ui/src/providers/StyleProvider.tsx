
import * as React from 'react';

import { merge } from 'lodash';

import CssBaseline from '@mui/material/CssBaseline';

import { Material } from '../material/styles/Material';
import { colors } from '../styles/colors';
import { colors as colorsDark } from '../styles/colorsDark';
import { Global, Props } from '../styles/Global';
import { PartialTheme } from '../styles/theme';

const ThemeContext = React.createContext(colors);

export function useTheme() {
  return React.useContext(ThemeContext);
}

/**
 * @deprecated use this instead: import { ThemeProvider } from '@ruyyaan/shared/ui-mui-theme';
 */
export const StyleProvider: React.FC<
  React.PropsWithChildren<{
    theme?: Props['themeName'];
    themeExtensions?: PartialTheme;
  }>
> = ({ theme, themeExtensions, children } = {}) => {
  const chosenTheme = theme === 'dark' ? colorsDark : colors;

  const extendedTheme = merge(chosenTheme, themeExtensions);

  return (
    <ThemeContext.Provider value={extendedTheme}>
      <CssBaseline />
      <Global themeName={theme || 'light'} theme={extendedTheme} />
      <Material />
      {children}
    </ThemeContext.Provider>
  );
};
