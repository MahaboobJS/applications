'use client';

import * as React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { SessionProvider } from 'next-auth/react';
import { SnackbarProvider } from 'notistack';
import {
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider,
} from '@tanstack/react-query';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { AuthProvider } from './AuthProvider';

const queryClient = new QueryClient();

const simpleTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function Providers({ children }: React.PropsWithChildren) {
  return (
    <SessionProvider basePath={'/api/v1/auth'}>
      <MuiThemeProvider theme={simpleTheme}>
        <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
          <LocalizationProvider dateAdapter={AdapterLuxon}>
            <TanStackQueryClientProvider client={queryClient}>
              <AuthProvider>{children}</AuthProvider>
            </TanStackQueryClientProvider>
          </LocalizationProvider>
        </SnackbarProvider>
      </MuiThemeProvider>
    </SessionProvider>
  );
}

export default Providers;
