import darkTheme from './dark-theme';
import lightTheme from './light-theme';
import baseTheme from './base-theme';

export const BASE = 'base';
export const DARK = 'dark';
export const LIGHT = 'light';

export const getTheme = themeName => {
  console.log('#getTheme: ', themeName);
  switch (themeName) {
    case BASE: return baseTheme;
    case DARK: return darkTheme;
    case LIGHT: return lightTheme;
    default: return baseTheme
  }
};
