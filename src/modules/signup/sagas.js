import { all, call, put, fork, take, takeLatest } from 'redux-saga/effects';

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  onHandleSignUpRequest
} from './redux';

function* watchCreativeSignUp() {
  console.log('#watchCreativeSignUp');
  
  while(true) {
    console.log('#watchCreativeSignUp while loop');
    const { payload } = yield take(SIGNUP_REQUEST);
    const task = yield fork(onHandleSignUpRequest, payload);
    console.log('#watchCreativeSignUp, task: ', task);
  }
}

export default function* sagas() {
  yield all ([
    watchCreativeSignUp(),
  ]);
}
