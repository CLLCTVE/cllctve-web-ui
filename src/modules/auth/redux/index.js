import {all, call, put, takeLatest} from 'redux-saga/effects';
import {push} from 'connected-react-router';
import request from '../../../lib/request';
import {FORM_ERROR} from 'final-form';
import { SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../../signup/redux';

export const LOGIN_REQUEST = 'auth/login/LOGIN_REQUEST';
export const LOGIN_FAILURE = 'auth/login/LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'auth/login/LOGIN_SUCCESS';
export const LOGIN_CANCELLED = 'auth/login/LOGIN_CANCELLED';

export const AUTHENTICATED = 'auth/login/AUTHENTICATED';
export const UNAUTHENTICATED = 'auth/login/UNAUTHENTICATED';

export const SET_TOKEN = 'auth/login/SET_TOKEN';
export const UNSET_TOKEN = 'auth/login/UNSET_TOKEN';

export const LOGOUT_REQUEST = 'auth/logout/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'auth/logout/LOGOUT_SUCCESS';

let user =
  localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : '';

const INITIAL_STATE = user
  ? {
      authenticated: true,
      user: user,
      token: null,
      isLoading: false,
      error: null,
    }
  : {
      user: null,
      token: null,
      authenticated: false,
      isLoading: false,
      error: null,
    };

export const handleLoginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload,
  isLoading: true,
});

export const handleLoginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setAuthToken = payload => ({
  type: SET_TOKEN,
  payload,
});

export const unsetAuthToken = payload => ({
  type: UNSET_TOKEN,
  payload,
});

export const handleLoginCancelled = () => ({
  type: LOGIN_CANCELLED,
});

export const handleLoginFailed = payload => ({
  type: LOGIN_FAILURE,
  payload,
});

export const handleLogoutRequest = () => ({
  type: LOGOUT_REQUEST,
  user: null,
  token: null,
});

export const handleAuthenticated = () => ({
  type: AUTHENTICATED,
});

export const handleUnAuthenticated = () => ({
  type: UNAUTHENTICATED,
});

export function* onHandleLoginRequest({email, password}) {
  console.log('#onHandleLoginRequest');
  try {
    console.log('#onHandleLoginRequest, try block');
    const response = yield call(request.post, '/login', {email, password});
    console.log('response: ', response);
    const {user, token} = response.data;
    
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
    yield all([
      put(handleLoginSuccess(user)),
      put(setAuthToken(token)),
      put(push('/on-boarding-flow/0')),
    ]);
  
    if (!user.onboarded) {
      yield put(push('/on-boarding-flow/0'))
    } else {
      yield put(push('/profile'));
    }
    
  } catch (err) {
    console.error('#onHandleLoginRequest, catch block, err: ', err);
    
    if (err.response && (err.response.status === 401 || err.response.status === 422)) {
      yield put({
        type: LOGIN_SUCCESS,
        payload: {[FORM_ERROR]: err.response.data.message,
          ...err.response.data.errors
        },
      });
    }
  
    if (err.message && err.message === 'Network Error') {
      yield put({
        type: LOGIN_SUCCESS,
        payload: {[FORM_ERROR]: 'Check your connection and please try again later.'},
      });
    }
  
    if (err.response && err.response.status === 500) {
      yield put({
        type: LOGIN_SUCCESS,
        payload: {[FORM_ERROR]: 'Its not you, its us....... Please try again later.'},
      });
    }
  
  }
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, isLoading: true, authenticated: false};
    case LOGIN_SUCCESS:
      return {...state, isLoading: false, authenticated: true, user: action.payload};
    case LOGIN_FAILURE:
      return {...state, isLoading: false, authenticated: false, error: action.payload};
    case SET_TOKEN:
      return {...state, token: action.payload};
    case UNSET_TOKEN:
      return {...state, token: action.payload};
    case LOGOUT_REQUEST:
      return {...state, isLoading: true, authenticated: false};
    case LOGOUT_SUCCESS:
      return {...state, isLoading: false, authenticated: false};
    case AUTHENTICATED:
      return {...state, authenticated: true};
    case UNAUTHENTICATED:
      return {...state, authenticated: false};
    default:
      return state;
  }
}
