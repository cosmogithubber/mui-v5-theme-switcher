import { blueGrey } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: blueGrey,
    secondary: blueGrey,
    divider: blueGrey[200],
    text: {
      primary: blueGrey[900],
      secondary: blueGrey[800],
    },
    background: {
      default: blueGrey[100],
      paper: blueGrey[200],
    },
  },
};
