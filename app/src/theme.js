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
    whiteeeeq: {
      main: '#FFFFFF',
      contrastText: '#000',
    },
    red: {
      main: '#FF0000',
      contrastText: '#fff',
    },
    gray:{
      main: '#FF0000',
      contrastText: '#fff',
    }
    
  },
  typography: {
    allVariants: {
      color: "#000"
    },
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#FF0000',
          border: 0,
          borderRadius: 13,
          boxShadow: '0 3px 5px 2px rgba(255, 0, 0, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
      }
    },
  }
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
      whiteeeeq: {
        main: '#FFFFFF',
        contrastText: '#000',
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
        fontWeight: 600,
      },
      
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: '#FF0000',
            border: 0,
            borderRadius: 13,
            boxShadow: '0 3px 5px 2px rgba(255, 0, 0, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
          },
        }
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            backgroundColor: '#222222',
          },
        }
      }
    }
  });


export const LIGHT = 'light';
export const DARK = 'dark';