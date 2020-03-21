import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
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
  return {
    user: {
      id: "5db7c3f20c0c7a2dd982256e",
      firstName: "Brandon",
      lastName: "Bailey",
      email: "bailey1.brandon@gmail.com"
    },
    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWRiN2MzZjIwYzBjN2EyZGQ5ODIyNTZlIiwiZmlyc3ROYW1lIjoiQnJhbmRvbiIsImxhc3ROYW1lIjoiQmFpbGV5IiwiZW1haWwiOiJiYWlsZXkxLmJyYW5kb25AZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOiIzMDE0MDQxMDAwIiwicm9sZSI6IlRlYWNoZXIiLCJvcmdJZCI6IjVkYjAwY2UyYTEyZDA4MTFkMGE5ZGEzNSJ9LCJpYXQiOjE1Nzg0Mjc5NjQsImV4cCI6MTU3OTAzMjc2NH0.gunQ5z3qh63jSvqzhjWy2BphsX7_o4xBtStGVEL7EMg "
  };
};

function* loginFlow(action) {
  console.log('#loginFlow, action: ', action);
  try {
    console.log('#loginFlow try block');
    const response = yield call(submit, action.payload);
    console.log('#loginFlow, response: ', response)
    localStorage.setItem('token', JSON.stringify(response.token));
    localStorage.setItem('user', JSON.stringify(response.user));
    yield all([
      put({type: LOGIN_SUCCESS, payload: response}),
      put(push('/profile'))
    ]);
    
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
