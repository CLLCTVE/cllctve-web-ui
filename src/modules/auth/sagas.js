import { all, call, cancel, cancelled, put, fork, take } from 'redux-saga/effects';

import request from '../../lib/request';
import history from '../../store';

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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const submit = async values => {
  console.log('#submit, values: ', values);
  await sleep(200);
  if (values.email !== "bailey1.brandon@gmail.com" || values.password !== "abc123") {
    console.log('email/password is wrong, throwing form error');
    throw { [FORM_ERROR]: 'Login Failed' }
  }
  console.log('#submit, success');
  window.alert(JSON.stringify(values, 0, 2));
};

function* authorize({email, password}) {
  console.log('#authorize, email: %s, password: %s', email, password);
  try {
    const {user, token} = yield call(submit, {email, password})
    console.log('#authorize, try block');
  } catch (err) {
    console.log('#authorize, catch block, err: ', err);
    yield put({ type: LOGIN_SUCCESS, payload: err })
  }
}

function* loginFlow() {
  console.log('#loginFlow');
  while (true) {
    const data = yield take(LOGIN_REQUEST);
    console.log('#loginFlow, data: ', data);
    const loginTask = yield fork(authorize, data.payload);
    
  }
}

export default function* sagas() {
  yield all ([
    loginFlow(),
  ]);
}
