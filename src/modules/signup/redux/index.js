import {all, call, put, takeLatest} from 'redux-saga/effects';
import {combineReducers} from 'redux';
import {push} from 'connected-react-router';
import request from '../../../lib/request';
import {FORM_ERROR} from 'final-form';
import { LOGIN_SUCCESS, setAuthToken, handleAuthenticated, handleLoginSuccess } from '../../auth/redux';

export const SIGNUP_REQUEST = 'creative/signup/SIGNUP_REQUEST';
export const SIGNUP_FAILURE = 'creative/signup/SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'creative/signup/SIGNUP_SUCCESS';

export const handleSignUpRequest = () => ({
  type: SIGNUP_REQUEST,
  isLoading: true,
});

export const handleSignUpSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload,
  isLoading: false,
});

export const handleSignUpFailed = payload => ({
  type: SIGNUP_FAILURE,
  payload,
  isLoading: false,
});

export function* onHandleSignUpRequest({
  firstName,
  lastName,
  email,
  gradMonthYear,
  phone,
  password,
}) {
  console.log(
    '#onHandleSignupRequest, firstName: %s, lastName: %s, email: %s, gradMonthYear: %s, phone: %s, password: %s',
    firstName,
    lastName,
    email,
    gradMonthYear,
    phone,
    password
  );
  
  try {
    console.log('#onHandleSignupRequest, try block');
    const response = yield call(request.post, '/users/signup', {
      firstName,
      lastName,
      email,
      gradMonthYear,
      phone,
      password
    });
    
    localStorage.setItem('token', JSON.stringify(response.data.token));
    localStorage.setItem('user', JSON.stringify(response.data.user));
    
    yield all([
      put(handleSignUpSuccess(response.data.user)),
      put(handleLoginSuccess(response.data.user)),
      put(setAuthToken(response.data.token)),
      put(handleAuthenticated()),
      put(push('/on-boarding-flow/0')),
    ]);
  } catch (err) {
    console.error('#onHandleSignupRequest, catch block, err: ', err);
    
    if (err.response && (err.response.status === 422 || err.response.status === 404 || err.response.status === 401)) {
      yield put({
        type: SIGNUP_SUCCESS,
        payload: {
          [FORM_ERROR]: 'Errors in form',
          ...err.response.data.errors
        },
      });
    }
    
    if (err.message && err.message === 'Network Error') {
      yield put({
        type: SIGNUP_SUCCESS,
        payload: {[FORM_ERROR]: 'Check your connection and please try again later.'},
      });
    }
    
    if (err.response && err.response.status === 500) {
      yield put({
        type: SIGNUP_FAILURE,
        payload: {[FORM_ERROR]: 'Its not you, its us....... Please try again later.'},
      });
    }
    
    yield put(handleSignUpFailed(err));
  }
}

const INITIAL_STATE = {
  isLoading: false,
  error: null
};

export default function signUp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {...state, isLoading: true};
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.errors
      };
    default:
      return state;
  }
}
