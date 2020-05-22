import {all, call, put, fork, take, takeLatest} from 'redux-saga/effects';

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
    const action = yield take(LOGIN_FAILURE);

    console.log('maybe a login failure happened, not sure... action: ', action);
  }
}

function* watchUserLogout() {
  console.log('#watchUserLogout');
  yield takeLatest(LOGOUT_REQUEST, onHandleLogoutRequest);
  
}

export default function* sagas() {
  yield all([watchUserAuthentication()]);
}
