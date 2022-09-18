import { grey, cyan, indigo } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: indigo,
    secondary: cyan,
    divider: '#fff',
    text: {
      primary: '#fff',
      secondary: grey[300],
    },
    background: {
      default: '#0b0f19',
      paper: indigo[900],
    },
  },
};
