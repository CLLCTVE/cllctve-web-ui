import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import app from './app/redux';
import auth from './auth/redux';

const rootReducer = history =>
  combineReducers({
    app,
    auth,
    router: connectRouter(history),
  });

export default rootReducer;
