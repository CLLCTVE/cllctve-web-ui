import { all, call, cancel, put, fork, take, takeLatest } from 'redux-saga/effects';

import request from '../../lib/request';

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT_REQUEST, handleLoginSuccess } from './redux';

export function* authorize({email, password}) {
  console.log(`#authorize, start, email: ${email}, password: ${password}`);
  try {
    const response = yield call(request.post, '/login', { email, password });
    console.log('#authorize, response: ', response);
    
    if (response.status !== 200) {
      console.warn("#authorize, Received non-200 status");
    }
    const {user, token } = response;
    console.log('#authorize, done');
    yield put(handleLoginSuccess())
  } catch (err) {
    console.error('#authorize, Error: ', err);
  }
}

function* loginFlow() {
  console.log('#loginFlow, start');
  while (true) {
    console.log('#loginFlow, loop');
    const {email, password} = yield take(LOGIN_REQUEST);
    console.log(`#loginFlow, email: ${email}, password: ${password}`);
    const task = yield fork(authorize, email, password);
    const action = yield take([LOGOUT_REQUEST, LOGIN_FAILURE]);
    if (action.type === LOGOUT_REQUEST) {
      console.log('#loginFlow, logout requested');
      yield cancel(task);
    }
    
    console.log('#loginFlow, end of loop');
    yield
  }
}

export function* watchLoginSaga() {
  console.log('#watchLoginSaga, start');
  yield takeLatest(LOGIN_REQUEST, loginFlow)
}

export default function* sagas() {
  yield all([
    watchLoginSaga,
    loginFlow
  ]);
}
