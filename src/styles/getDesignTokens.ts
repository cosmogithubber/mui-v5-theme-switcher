import {
  blueGrey,
  grey,
  cyan,
  indigo,
  deepPurple,
  lightGreen,
} from '@mui/material/colors';
import { PaletteMode } from '@mui/material';
export const getDesignTokens = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: deepPurple,
            secondary: lightGreen,
            divider: deepPurple[200],
            text: {
              primary: blueGrey[900],
              secondary: blueGrey[800],
            },
            background: {
              default: blueGrey[100],
              paper: blueGrey[200],
            },
          }
        : {
            // palette values for dark mode
            primary: indigo,
            secondary: cyan,
            divider: '#fff', // indigo[700],
            background: {
              default: '#0b0f19', //,indigo[900],
              paper: indigo[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  };
};
