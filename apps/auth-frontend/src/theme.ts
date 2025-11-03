import { createTheme } from '@mui/material/styles';

// Custom theme based on the teal/green color palette
export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#26A69A', // Medium teal for buttons
      light: '#80CBC4', // Light teal for left panel background
      dark: '#00897B', // Dark teal for right panel background
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#333333', // Dark grey for sign up button
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#80CBC4', // Light teal background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF', // White for main headings
      secondary: '#E0F2F1', // Light grey for subheadings and labels
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:before': {
            borderBottomColor: '#E0F2F1',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#E0F2F1',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#E0F2F1',
          },
          '& .MuiInputLabel-root': {
            color: '#E0F2F1',
          },
          '& .MuiInputBase-input': {
            color: '#FFFFFF',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

export default customTheme;
