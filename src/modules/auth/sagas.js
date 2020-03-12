import { all, call, cancel, cancelled, put, fork, take } from 'redux-saga/effects';

import request from '../../lib/request';

import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  handleLoginRequest,
  handleLoginSuccess,
  handleLoginFailed,
  handleLoginCancelled
} from './redux';
import { FORM_ERROR } from 'final-form';

const CLIENT_ROOT_URL = window.location.origin;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const submit = async ({email, password}) => {
  console.log('#submit, email: %s, password: %s', email, password);
  await sleep(200);
  // if (email !== 'bailey1.brandon@gmail.edu') {
  //   console.log('LoginPage#onSubmit, unknown email');
  //   return { email: 'Unknown username' }
  // }
  // if (password !== 'abc123') {
  //   return { [FORM_ERROR]: 'Login Failed' }
  // }
  if (email === 'bailey1.brandon@gmail.edu') {
    console.log('no bailey1.brandon@gmail.edu allowed');
    throw Error({ email: "No bailey1.brandon@gmail.edu's Allowed!" })
  }
  console.log('success!');
  window.location.href = `${CLIENT_ROOT_URL}/dashboard`;
}

export function* authorize({email, password}) {
  console.log('#authorize, start');
  try {
    // const response = yield call(submit, {email, password});
    console.log('success?!');
    const response = yield call(request.post, '/auth/login', {email, password});
    if (response.statusCode !== 200) {
      console.warn("#authorize, Received non-200 status");
  
      return { email: "Unknown email", [FORM_ERROR]: "failed to login" };
    }
    const {user, token } = response;
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('uid', JSON.stringify(user.id));
    localStorage.setItem('user', JSON.stringify(user));
    yield put(handleLoginSuccess(response));
    window.location.href = `${CLIENT_ROOT_URL}/profile`;
  } catch (err) {
    console.error('#authorize, Error');
    // yield put(handleLoginFailed(err));
    yield put({ type: LOGIN_SUCCESS, payload: err})
    
  } finally {
    console.log('Finally block');
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
