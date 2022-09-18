import React from 'react';
import {
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ThemeSelectContext } from '../contexts/theme/ThemeSelectContext';

export const ThemeSwitchModeSelect = () => {
  const themeContext = React.useContext(ThemeSelectContext);
  const defaultThemeStr: string = 'light';

  const [inputs, setInputs] = React.useState({
    customTheme: defaultThemeStr,
  });

  const handleSwitch = (evt: SelectChangeEvent) => {
    setInputs((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));

    themeContext.selectTheme(evt);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}>
      <FormControl
        size="small"
        sx={{
          minWidth: 200,
        }}>
        <InputLabel>Theme</InputLabel>
        <Select
          name="customTheme"
          value={inputs.customTheme}
          label="Theme"
          onChange={handleSwitch}>
          <MenuItem value={'dark'}>Dark</MenuItem>
          <MenuItem value={'light'}>Light</MenuItem>
          <MenuItem value={'green'}>Green</MenuItem>
          <MenuItem value={'orange'}>Orange</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
