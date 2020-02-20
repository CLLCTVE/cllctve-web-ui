import { all, call, apply, cancel, put, fork, take, takeLatest } from 'redux-saga/effects';

import request from '../../lib/request';

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT_REQUEST, handleLoginRequest, handleLoginSuccess } from './redux';

export function* authorize({email, password}) {
  console.log('#authorize, start');
  try {
    const response = yield call(request.post, '/auth/login', {email, password});
    console.log('#authorize, response: ', response);
    
    const {user, token } = response;
    if (response.statusCode !== 200) {
      console.warn("#authorize, Received non-200 status");
    }
  
    console.log('setting token: ', token);
    console.log('setting user: ', user);
    localStorage.setItem('token', token);
    localStorage.setItem('uid', user.id);
    console.log('#authorize, done');
    yield put(handleLoginSuccess(response));
  } catch (err) {
    console.error('#authorize, Error: ', err);
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
