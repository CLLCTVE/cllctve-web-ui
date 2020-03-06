import { createGlobalStyle } from 'styled-components';
import HansonBold from './fonts/Hanson-Bold.ttf';
import OpenSansBold from './fonts/OpenSans-Bold.ttf';
import OpenSans from './fonts/OpenSans-Regular.ttf';

const GlobalStyles = createGlobalStyle`
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
  
  html, body {
    font-family: 'Open Sans', 'Open Sans Bold', 'Hanson Bold', 'Helvetica Neue';
    background-color: ${props => {return props.theme.background;}};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex: 1;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  max-width: 100vw;
  }
  
  h1,h2,h3,h4,h5,
  .ant-btn {
     font-family: 'Hanson Bold';
    }
`;

export default GlobalStyles;
