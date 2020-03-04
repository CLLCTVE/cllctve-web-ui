import { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#000000',
  primaryLight: '#EFEFEF',
};

const GlobalStyles = createGlobalStyle`
  html, body {
    font: Bold 20px/27px Open Sans;
    background-color: pink;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
