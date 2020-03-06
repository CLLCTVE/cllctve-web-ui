import baseTheme from './base-theme';

export const BASE = 'base';

export const getTheme = themeName => {
  console.log('#getTheme: ', themeName);
  return baseTheme;
};
