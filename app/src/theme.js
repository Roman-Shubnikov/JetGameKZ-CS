import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme_light = createTheme({
  palette: {
    primary: {
      main: '#DDDDDD',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    red: {
      main: '#FF0000',
      contrastText: '#fff',
    },
    
  },
  typography: {
    allVariants: {
      color: "#000"
    },
    button: {
      fontWeight: 600,
    },
  },
});
export const theme_dark = createTheme({
    palette: {
      primary: {
        main: '#131313;',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      red: {
        main: '#FF0000',
        contrastText: '#fff',
      },
    },
    typography: {
      allVariants: {
        color: "#fff"
      },
      button: {
        fontWeight: 800,
      },
      
    },
  });


export const LIGHT = 'light';
export const DARK = 'dark';