import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import reduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './modules/rootReducer';
import sagas from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();

let basename = '/';
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let history = createBrowserHistory({basename});
let middleware = [routerMiddleware(history), sagaMiddleware, reduxThunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

let store = createStore(
  rootReducer(history),
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
  ));
/* eslint-enable */

sagaMiddleware.run(sagas);

export default store;
