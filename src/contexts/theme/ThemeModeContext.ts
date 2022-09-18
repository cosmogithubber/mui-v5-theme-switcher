import React from 'react';

interface ThemeModeContextSchema {
  toggleThemeMode: () => void;
}

export const ThemeModeContext = React.createContext<ThemeModeContextSchema>(
  {} as ThemeModeContextSchema
);
export {};
