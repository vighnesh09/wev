import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'var(--font-poppins)',
    h1: {
      fontFamily: 'var(--font-poppins)',
    },
    h2: {
      fontFamily: 'var(--font-poppins)',
    },
    h3: {
      fontFamily: 'var(--font-poppins)',
    },
    h4: {
      fontFamily: 'var(--font-poppins)',
    },
    h5: {
      fontFamily: 'var(--font-poppins)',
    },
    h6: {
      fontFamily: 'var(--font-poppins)',
    },
    button: {
      fontFamily: 'var(--font-poppins)',
      textTransform: 'none',
    },
    body1: {
      fontFamily: 'var(--font-poppins)',
    },
    body2: {
      fontFamily: 'var(--font-poppins)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});