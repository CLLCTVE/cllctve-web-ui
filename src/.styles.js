import { createGlobalStyle } from 'styled-components';

import HansonBold from './styles/fonts/Hanson-Bold.ttf';
import OpenSansBold from './styles/fonts/OpenSans-Bold.ttf';
import OpenSans from './styles/fonts/OpenSans-Regular.ttf';

const GlobalStyles = createGlobalStyle`
  .error {
    color: red;
    font-family: 'Hanson Bold';
    font-weight: normal;
  }
  
  .ant-picker-suffix{
    color: #d9d9d9 !important;
  }
  
  .ant-input, .ant-picker-input {
    background: none !important;
    font-family: 'Hanson Bold';
    font-weight: normal;
  }
  
  .ant-picker-input > input {
    color: #ffffff !important;
  }
  
  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
    background: #FF6633 !important;
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
    font-family: 'Open Sans', 'Open Sans Bold', 'Hanson Bold';
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
