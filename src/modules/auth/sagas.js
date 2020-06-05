import {all, call, cancel, fork, take} from 'redux-saga/effects';

import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  onHandleLoginRequest,
  onHandleLogoutRequest
} from './redux';
import { SIGNUP_SUCCESS } from '../signup/redux';

function* watchUserLogout(task=null) {
  console.log('#watchUserLogout');
  const action = yield take(LOGOUT_REQUEST);
  
  
  if (action.type === LOGOUT_REQUEST) {
    console.log('#watchUserLogout, LOGOUT_REQUEST');
     if (task) {
       console.log('#watchUserLogout, task: ', task);
       yield cancel(task);
     }
    yield call(onHandleLogoutRequest);
  }
}

function* watchUserAuthentication() {
  console.log('#watchUserAuthentication');

  while (true) {
    console.log('#watchUserAuthentication while loop');
    const {action, payload} = yield take([LOGIN_REQUEST, LOGOUT_REQUEST, SIGNUP_SUCCESS]);
    console.log('watchUserAuthentication action: ', action);
    if (action && action.type === SIGNUP_SUCCESS) {
      yield call(watchUserLogout);
    } else if (action && action.type === LOGOUT_REQUEST) {
      yield call(onHandleLogoutRequest);
    } else {
      const task = yield fork(onHandleLoginRequest, payload);
      yield call(watchUserLogout, task);
    }
  }
}

export default function* sagas() {
  yield all([watchUserAuthentication()]);
}
