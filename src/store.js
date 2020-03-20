import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux'
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createReduxPromiseListener from 'redux-promise-listener';

import rootReducer from './modules/rootReducer';
import sagas from './modules/rootSagas';

const reduxPromiseListener = createReduxPromiseListener();
const sagaMiddleware = createSagaMiddleware();

let basename = '/';
/* eslint-disable no-underscore-dangle */
const composeEnhancers =  (typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export let history = createBrowserHistory({basename});
let middleware = [
  reduxPromiseListener.middleware,
  sagaMiddleware,
  reduxThunk,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  console.log('development env, adding logger...');
  const level = 'console';
  const collapsed =  true;
  const logger = {};
  middleware.push(createLogger({
    level,
    collapsed,
    logger
  }));
}

let store = createStore(
  rootReducer(history),
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(
      ...middleware
    )
  ));
/* eslint-enable */

export const promiseListener = reduxPromiseListener // <---- ⚠️ IMPORTANT ⚠️

sagaMiddleware.run(sagas);

export default store;
