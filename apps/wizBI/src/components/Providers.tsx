'use client';

import * as React from 'react';

// Commenting out all complex providers for now to get the app running
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
// import HolyLoader from 'holy-loader';
// import { SessionProvider } from 'next-auth/react';
// import { SnackbarProvider } from 'notistack';
// import { QueryClient, QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';
// import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
// import { AuthProvider } from './AuthProvider';

function Providers({ children }: React.PropsWithChildren) {
  // Simplified version - just return children for now
  return <>{children}</>;

  // Original complex provider setup - commented out
  /*
  return (
    <SessionProvider basePath={'/api/v1/auth'}>
      <MuiThemeProvider theme={simpleTheme}>
        <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
          <LocalizationProvider dateAdapter={AdapterLuxon}>
            <TanStackQueryClientProvider client={queryClient}>
              <HolyLoader />
              <AuthProvider>{children}</AuthProvider>
            </TanStackQueryClientProvider>
          </LocalizationProvider>
        </SnackbarProvider>
      </MuiThemeProvider>
    </SessionProvider>
  );
  */
}

export default Providers;
