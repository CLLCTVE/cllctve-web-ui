import React from 'react';
import ReactDOM from 'react-dom';
import Index from "./components";
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import {ThemeProvider} from 'styled-components';

// import 'antd/dist/antd.css';
import './index.css';
import { theme } from './styles';
import GlobalStyles from './styles';

import store, {history} from './store';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <Index />
        <GlobalStyles />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
