import { Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DarkIcon from '@mui/icons-material/Brightness4';
import LightIcon from '@mui/icons-material/Brightness7';
import React from 'react';

import { ThemeModeContext } from '../contexts/theme/ThemeModeContext';

export const ThemeSwitchModeButton = () => {
  const theme = useTheme();
  const themeContext = React.useContext(ThemeModeContext);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}>
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={themeContext.toggleThemeMode}
        color="inherit">
        {theme.palette.mode === 'dark' ? <LightIcon /> : <DarkIcon />}
      </IconButton>
    </Box>
  );
};
