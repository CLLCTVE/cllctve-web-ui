import {all, call, cancel, put, fork, take, takeLatest} from 'redux-saga/effects';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_TOKEN,
  UNSET_TOKEN,
  LOGOUT_REQUEST,
  onHandleLoginRequest,
  onHandleLogoutRequest
} from './redux';

function* watchUserAuthentication() {
  console.log('#watchUserAuthentication');

  while (true) {
    console.log('#watchUserAuthentication while loop');
    const {payload} = yield take(LOGIN_REQUEST);
    const task = yield fork(onHandleLoginRequest, payload);
    const action = yield take(LOGOUT_REQUEST);
    
    
    if (action.type === LOGOUT_REQUEST) {
      yield cancel(task);
      yield call(onHandleLogoutRequest);
    }
  }
}

export default function* sagas() {
  yield all([watchUserAuthentication()]);
}
