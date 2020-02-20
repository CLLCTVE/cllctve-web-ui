import { all, call, apply, cancel, cancelled, put, fork, take, takeLatest } from 'redux-saga/effects';

import request from '../../lib/request';

import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGIN_FAILURE,
  handleLoginRequest,
  handleLoginSuccess,
  handleLoginFailed,
  handleLoginCancelled
} from './redux';

const CLIENT_ROOT_URL = 'http://localhost:3000';

export function* authorize({email, password}) {
  console.log('#authorize, start');
  try {
    const response = yield call(request.post, '/auth/login', {email, password});
    if (response.statusCode !== 200) {
      console.warn("#authorize, Received non-200 status");
    }
    const {user, token } = response;
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('uid', JSON.stringify(user.id));
    localStorage.setItem('user', JSON.stringify(user));
    yield put(handleLoginSuccess(response));
    window.location.href = `${CLIENT_ROOT_URL}/profile`;
  } catch (err) {
    console.error('#authorize, Error: ', err);
    yield put(handleLoginFailed(err));
  } finally {
    if (yield cancelled()) {
      yield put(handleLoginCancelled())
    }
  }
}

function* loginFlow(action) {
  console.log('#loginFlow, start, action: ', action);
  while (true) {
    console.log('#loginFlow, loop');
    const data = yield take(LOGIN_REQUEST);
    yield put(handleLoginRequest(data.payload));
    console.log('#loginFlow, looping');
    console.log(`#loginFlow, data: `, data.payload);
    const task = yield fork(authorize, data.payload);
    const action = yield take([LOGOUT_REQUEST, LOGIN_FAILURE]);
    if (action.type === LOGOUT_REQUEST) {
      console.log('#loginFlow, logout requested');
      yield cancel(task);
    }
    
    console.log('#loginFlow, end of loop');
  }
}

// export function* watchLoginSaga() {
//   console.log('#watchLoginSaga, start');
  // yield takeLatest(LOGIN_REQUEST, function*(action) {
  //   console.log('#watchLoginSaga, anonymous function, action: ', action);
  // });
//   yield takeLatest(LOGIN_REQUEST, loginFlow)
// }

export default function* sagas() {
  yield all ([
    loginFlow(),
  ]);
}
