import { grey, deepPurple, lightGreen } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const greenTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: lightGreen,
    secondary: deepPurple,
    divider: '#fff',
    background: {
      default: lightGreen[900],
      paper: '#222831',
    },
    text: {
      primary: '#fff',
      secondary: grey[500],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: 'small',
        sx: {
          color: '#94BE8E',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          background: '#222831',
        },
      },
    },
  },
};
