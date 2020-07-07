import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import app from './app/redux';
import auth from './auth/redux';
import signUp from './signup/redux';
import onBoarding from './signup/redux/onboarding';
import landing from './landing/redux';

const rootReducer = history =>
  combineReducers({
    app,
    auth,
    signUp,
    onBoarding,
    landing,
    router: connectRouter(history),
  });

export default rootReducer;
