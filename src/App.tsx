import * as React from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import {
  Box,
  Button,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Paper,
  Switch,
  Typography,
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  SelectChangeEvent,
} from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeSelectContext } from './contexts/theme/ThemeSelectContext';

import { darkTheme } from './styles/theme/dark';
import { lightTheme } from './styles/theme/light';
import { greenTheme } from './styles/theme/green';
import { orangeTheme } from './styles/theme/orange';

import createEmotionCache from './utility/createEmotionCache';

import './styles.css';
import { AccountCircle } from '@mui/icons-material';
import SimpleDialogDemo from './components/SimpleDialogDemo';
import { ThemeSwitchModeSelect } from './components/ThemeSwitchModeSelect';

interface AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const App: React.FunctionComponent<AppProps> = (props) => {
  const { emotionCache = clientSideEmotionCache } = props;

  const defaultTheme: ThemeOptions = lightTheme;
  const defaultThemeStr: any = 'light';

  // selected theme state
  const [selectedTheme, setSelectedTheme] = React.useState(defaultTheme);

  // eslint-disable-next-line
  const [inputs, setInputs] = React.useState({
    customTheme: defaultThemeStr,
  });

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const themeSelect = React.useMemo(
    () => ({
      selectTheme: (evt: SelectChangeEvent) => {
        console.log('in App selectTheme ', evt);
        console.log(evt.target.value);
        setInputs((prevState) => ({
          ...prevState,
          [evt.target.name]: evt.target.value,
        }));

        switch (evt.target.value) {
          case 'green':
            localStorage.setItem('current-theme', JSON.stringify(greenTheme));
            setSelectedTheme(greenTheme);
            break;
          case 'orange':
            localStorage.setItem('current-theme', JSON.stringify(orangeTheme));
            setSelectedTheme(orangeTheme);
            break;
          case 'light':
            localStorage.setItem('current-theme', JSON.stringify(lightTheme));
            setSelectedTheme(lightTheme);
            break;
          case 'dark':
          default:
            localStorage.setItem('current-theme', JSON.stringify(darkTheme));
            setSelectedTheme(darkTheme);
        }
      },
    }),
    []
  );

  return (
    <CacheProvider value={emotionCache}>
      <ThemeSelectContext.Provider value={themeSelect}>
        <ThemeProvider theme={createTheme(selectedTheme)}>
          <CssBaseline enableColorScheme />
          <Box>
            <FormGroup
              sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1,
                // bgcolor: 'background.paper',
                // borderRadius: 1,
              }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={auth}
                    onChange={handleChange}
                    aria-label="login switch"
                  />
                }
                label={auth ? 'Logout' : 'Login'}
              />
            </FormGroup>
            <AppBar position="static">
              <Toolbar
                sx={{
                  display: 'flex',
                  p: 1,
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton>
                <ThemeSwitchModeSelect />
                {auth && (
                  <Box>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit">
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}>
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                  </Box>
                )}
              </Toolbar>
            </AppBar>
          </Box>
          <Typography color="primary" variant="h1" sx={{ m: 3 }}>
            {selectedTheme?.palette?.mode}{' '}
            {selectedTheme?.palette?.mode === 'dark' ? '🌙' : '🌞'}
          </Typography>
          <Paper sx={{ height: '400px' }} className="App">
            <Box
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'baseline',
              }}>
              <SimpleDialogDemo />
              <Typography color="primary" variant="h4" sx={{ m: 6 }}>
                Material UI v5 - Dynamic Theme Switcher
              </Typography>
              <Box>
                <Button variant="contained" color="secondary">
                  Secondary
                </Button>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </ThemeSelectContext.Provider>
    </CacheProvider>
  );
};

export default App;
