import { all, call, cancel, cancelled, put, fork, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import request from '../../lib/request';
import axios from 'axios';
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
  await sleep(200);
  console.log('#submit, values: ', values);
  if (values.email !== "bailey1.brandon@gmail.com" || values.password !== "abc123") {
    throw { [FORM_ERROR]: 'Login Failed' }
  }
  console.log('success!');
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

function* authorize({email, password}) {
  console.log('#authorize, email: %s, password: %s', email, password);
  try {
    console.log('#authorize, try block');
    const response = yield call(submit, {email, password});
    console.log('response: ', response);
  
    if (response.statusCode !== 200) {
      console.warn("#authorize, Received non-200 status");
      debugger;
    }
    console.log('#authorize, try block, successfully logged in');
    localStorage.setItem('token', JSON.stringify(response.token));
    localStorage.setItem('user', JSON.stringify(response.user));
    yield [put(handleLoginSuccess(response)), put(push('/profile'))];
    
  } catch (err) {
    console.log('#authorize, catch block, err: ', err);
    
  } finally {
    console.log('#authorize, finally block');
    if (yield cancelled()) {
      yield put(handleLoginCancelled())
    }
  }
}

function* loginFlow() {
  console.log('#loginFlow');
  while (true) {
    console.log('#loginFlow while loop...');
    const action = yield takeLatest(LOGIN_REQUEST, authorize, action.payload);
    console.log('#loginFlow, action: ', action);
  }
}

export default function* sagas() {
  yield all ([
    loginFlow(),
  ]);
}
