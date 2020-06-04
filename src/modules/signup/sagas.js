import {all, fork, take, takeLatest} from 'redux-saga/effects';

import {SIGNUP_REQUEST, onHandleSignUpRequest} from './redux';

import {ONBOARDING_REQUEST, onHandleOnBoardingRequest} from './redux/onboarding';

function* watchOnBoardingFlow() {
  console.log('#watchOnBoardingFlow');
  yield takeLatest(ONBOARDING_REQUEST, onHandleOnBoardingRequest);
}

function* watchCreativeSignUp() {
  console.log('#watchCreativeSignUp');

  while (true) {
    console.log('#watchCreativeSignUp while loop');
    const {payload} = yield take(SIGNUP_REQUEST);
    const task = yield fork(onHandleSignUpRequest, payload);
    console.log('#watchCreativeSignUp, task: ', task);
  }
}

export default function* sagas() {
  yield all([watchCreativeSignUp()]);
}
