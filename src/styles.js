import { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#000000',
  primaryLight: '#EFEFEF',
};

const GlobalStyles = createGlobalStyle`
  body {
    background-color: pink;
  }
`;

export default GlobalStyles;
