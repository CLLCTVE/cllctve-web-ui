import { all, call, cancel, put, fork, take, takeLatest } from 'redux-saga/effects';

import request from '../../lib/request';

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT_REQUEST } from './redux';

export function* authorize({email, password}) {
  console.log(`#authorize, email: ${email}, password: ${password}`);
  try {
    const response = yield call(request.post, '/login', { email, password });
    console.log('#authorize, response: ', response);
    
    if (response.status !== 200) {
      console.warn("#authorize, Received non-200 status");
    }
    
  } catch (err) {
    console.error('#authorize, Error: ', err);
  }
}

function* loginFlow() {
  while (true) {
    const {email, password} = yield take(LOGIN_REQUEST);
    console.log(`#loginFlow, email: ${email}, password: ${password}`);
    const task = yield fork(authorize, email, password);
    const action = yield take([LOGOUT_REQUEST, LOGIN_FAILURE]);
    if (action.type === LOGOUT_REQUEST) {
      console.log('#loginFlow, logout requested');
      yield cancel(task);
    }
  }
};

function* watchLoginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginFlow)
}

export default function* sagas() {
  yield all([
    watchLoginSaga
  ]);
}
