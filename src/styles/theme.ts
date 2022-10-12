import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#3537b3",
    },
    secondary: {
      main: "#10b576",
    },
    error: {
      main: "#ff2f3e",
    },
  },
});

export default theme;
