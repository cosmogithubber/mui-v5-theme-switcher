import React from 'react';

interface ThemeSelectContextSchema {
  selectTheme: (evt: any) => void;
}

export const ThemeSelectContext = React.createContext<ThemeSelectContextSchema>(
  {} as ThemeSelectContextSchema
);
export {};
