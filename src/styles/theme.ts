import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#3537b3',
    },
    secondary: {
      main: '#10b576',
    },
    error: {
      main: '#ff2f3e',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: 96,
      fontWeight: 300,
      letterSpacing: '-1.5px',
      lineHeight: '112px',
    },
    h2: {
      fontSize: 60,
      fontWeight: 300,
      letterSpacing: '-0.5px',
      lineHeight: '72px',
    },
    h3: {
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: '0px',
      lineHeight: '56px',
    },
    h4: {
      fontSize: 25,
      fontWeight: 800,
      letterSpacing: '0.25px',
      lineHeight: '31px',
    },
    h5: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: '0px',
      lineHeight: '27px',
    },
    h6: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '0.15px',
      lineHeight: '29px',
    },
    subtitle1: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '0.15px',
      lineHeight: '26px',
    },
    subtitle2: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.15px',
      lineHeight: '24px',
    },
    body1: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '0.15px',
      lineHeight: '24px',
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: '0.15px',
      lineHeight: '21px',
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '0.4px',
      lineHeight: '24px',
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: '0.4px',
      lineHeight: '20px',
    },
    overline: {
      fontSize: 10,
      fontWeight: 400,
      letterSpacing: '1px',
      lineHeight: '14px',
    },
  },
});

export default theme;
