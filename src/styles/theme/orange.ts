import { blueGrey, deepOrange, deepPurple } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const orangeTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: deepOrange,
    secondary: deepPurple,
    divider: blueGrey[200],
    text: {
      primary: deepOrange[100],
      secondary: deepOrange[200],
    },
    background: {
      default: deepOrange[200],
      paper: deepOrange[900],
    },
  },
};
