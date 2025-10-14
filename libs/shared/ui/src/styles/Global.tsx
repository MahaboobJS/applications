import darkScrollbar from '@mui/material/darkScrollbar';
import { createGlobalStyle } from 'styled-components';

import { Theme } from './theme';

export type Props = Readonly<{
  theme: Theme;
  themeName: 'dark' | 'light';
  customer?: string;
}>;

export const Global = createGlobalStyle<Omit<Props, 'customer'>>`
  ${({ themeName }) => (themeName === 'dark' ? darkScrollbar() : '')}
  html {
    -webkit-text-size-adjust: 100%;
    // define font sizes
    --14px: 0.875rem;
    --15px: 0.9375rem;
    --16px: 1rem;
    --17px: 1.0625rem;
    --18px: 1.125rem;
    --19px: 1.1875rem;
    --20px: 1.25rem;
    --21px: 1.3125rem;
    // perhaps:
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.3125rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2.652rem;
    --font-size-4xl: 4rem;
    // perhaps:
    --text-default: ${({ theme }) => theme.text.default};
    --text-interactive-default: '#FFFFFF';
    --text-interactive-hover: '';
    --text-interactive-pressed: '';
    --text-status-neutral: '#5D5D5D';
    --text-status-success: '#2C6935';
    --text-status-warning: '#8F4C0F';
    --text-status-critical: '#A8361C';

    // fonts:
    color: ${({ theme }) => theme.text.default};
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    font-feature-settings: 'cv05' on;

    tab-size: 4;
    scroll-behavior: smooth;
  }
  body {
    color: ${({ theme }) => theme.text.default};
    background: ${({ theme }) => theme.surface.backdrop};
    font-family: inherit;
    line-height: inherit;
    margin: 0;
  }
  h1,
  h2,
  p,
  pre {
    margin: 0;
  }
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: currentColor;
  }
  h1,
  h2 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  pre {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
  }
  #root {
    height: 100vh;
  }
`;
