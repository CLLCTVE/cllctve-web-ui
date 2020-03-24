import {all, call, put, takeLatest} from 'redux-saga/effects';
import {push} from 'connected-react-router';
import request from '../../../lib/request';
import {FORM_ERROR} from 'final-form';

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

export function* onHandleLoginRequest({email, password}) {
  try {
    const response = yield call(request.post, '/login', {email, password});

    localStorage.setItem('token', JSON.stringify(response.data.token));
    localStorage.setItem('user', JSON.stringify(response.data.user));
    yield all([
      put(handleLoginSuccess(response.data.user)),
      put(setAuthToken(response.data.token)),
      put(push('/profile')),
    ]);
  } catch (err) {
    console.error('#onHandleLoginRequest, catch block, err: ', err);
    if (err.message === 'Network Error') {
      yield put({
        type: LOGIN_SUCCESS,
        payload: {[FORM_ERROR]: 'Check your connection and please try again later.'},
      });
    } else {
      console.error('#onHandleLoginRequest catch block, err: ', err);
      yield put({type: LOGIN_SUCCESS, payload: {[FORM_ERROR]: 'Login Failed'}});
    }
    console.error('#onHandleLoginRequest catch block, err: ', err);
    yield put({type: LOGIN_SUCCESS, payload: {[FORM_ERROR]: 'Login Failed'}});
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
