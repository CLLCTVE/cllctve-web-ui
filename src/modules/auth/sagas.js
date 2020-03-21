import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SET_TOKEN,
  UNSET_TOKEN,
  onHandleLoginRequest
} from './redux';

import { FORM_ERROR } from 'final-form';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const apiCall = ({email, password}) => axios.post(`${API_URL}/login`, {email, password});

function* loginFlow(action) {
  console.log('#loginFlow, action: ', action);
  
  try {
    console.log('#loginFlow try block');
    const response = yield call(apiCall, action.payload);
    console.log('#loginFlow, response: ', response);
    localStorage.setItem('token', JSON.stringify(response.token));
    localStorage.setItem('user', JSON.stringify(response.user));
    
    yield all([
      put({type: LOGIN_SUCCESS, payload: response}),
      put(push('/profile'))
    ]);
    
  } catch(err) {
    if (err.message === 'Network Error') {
      yield put({ type: LOGIN_SUCCESS, payload: { [FORM_ERROR]: 'Its not you, its us. Please try again later.' } })
    }
    
    console.error('#loginFlow catch block, err: ', err);
    yield put({type: LOGIN_SUCCESS, payload: { [FORM_ERROR]: 'Login Failed' }})
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
