import { all, call, put, fork, take, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_TOKEN,
  UNSET_TOKEN,
  onHandleLoginRequest
} from './redux';

import { FORM_ERROR } from 'final-form';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const apiCall = ({email, password}) => axios.post(`${API_URL}/login`, {email, password});

function* loginFlow({ email, password }) {
  try {
    const response = yield call(apiCall, {email, password});
    console.log('#loginFlow, response: ', response);
    localStorage.setItem('token', JSON.stringify(response.token));
    localStorage.setItem('user', JSON.stringify(response.user));
    
    yield all([
      put({type: LOGIN_SUCCESS, payload: response}),
      put(push('/profile'))
    ]);
    
  } catch(err) {
    if (err.message === 'Network Error') {
      yield put({ type: LOGIN_SUCCESS, payload: { [FORM_ERROR]: 'Check your connection and please try again later.' }})
    } else {
      console.error('#loginFlow catch block, err: ', err);
      yield put({type: LOGIN_SUCCESS, payload: { [FORM_ERROR]: 'Login Failed' }})
    }
    console.error('#loginFlow catch block, err: ', err);
    yield put({type: LOGIN_SUCCESS, payload: { [FORM_ERROR]: 'Login Failed' }})
  }
}

function* watchUserAuthentication() {
  console.log('#watchUserAuthentication');
  // yield takeLatest(LOGIN_REQUEST, loginFlow);
  
  while(true) {
    console.log('#watchUserAuthentication while loop');
    const { payload } = yield take(LOGIN_REQUEST);
    const task = yield fork(loginFlow, payload);
    const action = yield take (LOGIN_FAILURE);
    
    console.log('maybe a login failure happened, not sure... action: ', action);
    
  }
}

export default function* sagas() {
  yield all ([
    watchUserAuthentication(),
  ]);
}
