import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from '../../../lib/request';
import { FORM_ERROR } from 'final-form';
import { setAuthToken } from '../../auth/redux';

export const SIGNUP_REQUEST = 'creative/signup/SIGNUP_REQUEST';
export const SIGNUP_FAILURE = 'creative/signup/SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'creative/signup/SIGNUP_SUCCESS';

export const handleSignUpRequest = () => ({
  type: SIGNUP_REQUEST,
  isLoading: true,
});

export const handleSignUpSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
  isLoading: false,
});

export const handleSignUpFailed = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
  isLoading: false,
});

export function* onHandleSignUpRequest({firstName, lastName, email, gradMonthYear, phoneNumber, password}) {
  console.log('#onHandleSignupRequest, firstName: %s, lastName: %s, email: %s, gradMonthYear: %s, phoneNumber: %s, password: %s', firstName, lastName, email, gradMonthYear, phoneNumber, password);
  
  try{
    console.log('#onHandleSignupRequest, try block');
    const response = yield call(
      request.post,
      '/users/signup',
      {firstName, lastName, email, gradMonthYear, phone: phoneNumber, password}
      );
    console.log('#onHandleSignupRequest, response: ', response);
    yield all([
      put(handleSignUpSuccess(response)),
      put(setAuthToken(response)),
      put(push('/onboarding'))
    ]);
  } catch (err) {
    console.error('#onHandleSignupRequest, catch block, err: ', err);
    yield put(handleSignUpFailed(err));
  }
}

export default function signup(state = {}, action) {
  switch(action.type) {
    case SIGNUP_REQUEST:
      return {...state, isLoading: true};
    case SIGNUP_SUCCESS:
      return {...state, isLoading: false};
    case SIGNUP_FAILURE:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
}
