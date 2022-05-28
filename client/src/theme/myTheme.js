import { createTheme, responsiveFontSizes } from '@mui/material';
import { blue, pink } from '@mui/material/colors';

function myTheme(themeName = 'light') {
  let theme = createTheme({
    themeName: 'Custom Theme',
    typography: {
      useNextVariants: true,
      fontFamily: [
        'IBM Plex Sans',
        'Lato',
        'Roboto',
        '"Helvetica Neue"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
      h2: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
      h3: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
      h4: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
      h5: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
      h6: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
      button: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
    },
    palette: {
      mode: themeName,
      primary: {
        light: blue[800],
        main: blue[500],
        dark: blue[500],
      },
      secondary: {
        light: pink[800],
        main: pink[500],
        dark: pink[500],
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
}

export default myTheme;
