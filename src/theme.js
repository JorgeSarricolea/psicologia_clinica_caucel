import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6C5CE7',
      light: '#A29BFE',
      dark: '#4834D4',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2d2640',
      light: '#453d5c',
      dark: '#1a1630',
      contrastText: '#ffffff',
    },
    background: {
      default: '#FAF9FE',
      paper: '#ffffff',
    },
    text: {
      primary: '#2d2640',
      secondary: '#7c7591',
    },
    divider: 'rgba(108, 92, 231, 0.1)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
      fontSize: '1.85rem',
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
      lineHeight: 1.8,
      fontSize: '1rem',
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.12em',
      fontSize: '0.75rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: '"Inter", sans-serif',
          borderRadius: 50,
          padding: '10px 28px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          color: '#6C5CE7',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
          borderRadius: 50,
        },
      },
    },
  },
});

export default theme;
