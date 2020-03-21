import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from './redux';

import { FORM_ERROR } from 'final-form';
import history from '../../store';

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

function* loginFlow(action) {
  console.log('#loginFlow, action: ', action);
  try {
    console.log('#loginFlow try block');
    const response = yield call(submit, action.payload);
    console.log('#loginFlow, response: ', response)
    
  } catch(err) {
    console.error('#loginFlow catch block, err: ', err);
    yield put({type: LOGIN_SUCCESS, payload: err})
  }
}

function* watchUserAuthentication() {
  console.log('#watchUserAuthentication');
  yield takeLatest(LOGIN_REQUEST, loginFlow);
}

export default function* sagas() {
  yield all ([
    watchUserAuthentication(),
  ]);
}
