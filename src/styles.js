import { createGlobalStyle } from 'styled-components';

import HansonBold from './fonts/Hanson-Bold.ttf';
import OpenSansBold from './fonts/OpenSans-Bold.ttf';
import OpenSans from './fonts/OpenSans-Regular.ttf';

export const theme = {
  primary: '#000000',
  primaryLight: '#EFEFEF',
};

const GlobalStyles = createGlobalStyle`
  .ant-input {
  background: none !important;
  font-family: 'Hanson Bold';
  font-weight: normal;
  }
  @font-face {
    font-family: 'Hanson Bold';
    src: local('Hanson Bold'), local('HansonBold'), url(${HansonBold}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Open Sans Bold';
    src: local('Open Sans Bold'), local('OpenSans Bold'), local('OpenSansBold'), url(${OpenSansBold}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), local('Open Sans Regular'), local('OpenSans-Regular'), url(${OpenSans}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  
  
  *{
      outline-color: transparent;
      outline-style: none;
    }
    
    .ant-btn {
     font-family: 'Hanson Bold';
    }
    
  html, body {
  --antd-wave-shadow-color: #FF6633;
    font-family: 'Open Sans', 'Open Sans Bold';
    background-color: pink;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  
  a {
    color: #FFFFFF ;
    font-family: 'Open Sans Bold';
    font-weight: normal;
  }
`;

export default GlobalStyles;
