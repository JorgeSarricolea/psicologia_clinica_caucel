import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5C6BC0',
      light: '#8E99D6',
      dark: '#3F51B5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2d2640',
      light: '#453d5c',
      dark: '#1a1630',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8f7fc',
      paper: '#ffffff',
    },
    text: {
      primary: '#2d2640',
      secondary: '#6b6383',
    },
    divider: 'rgba(0, 0, 0, 0.07)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Nunito", "Inter", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Nunito", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Nunito", "Inter", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Nunito", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.75,
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.1em',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: '"Inter", sans-serif',
          borderRadius: 10,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          color: '#5C6BC0',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
