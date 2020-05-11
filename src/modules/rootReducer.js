import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import app from './app/redux';
import auth from './auth/redux';
import signUp from './signup/redux';
import onBoarding from './signup/redux/onboarding';

const rootReducer = history =>
  combineReducers({
    app,
    auth,
    signUp,
    onBoarding,
    router: connectRouter(history),
  });

export default rootReducer;
