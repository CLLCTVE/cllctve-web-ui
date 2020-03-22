import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from '../../../lib/request';
import { FORM_ERROR } from 'final-form';

export const SIGNUP_REQUEST = 'creative/signup/SIGNUP_REQUEST';
export const SIGNUP_FAILURE = 'creative/signup/SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'creative/signup/SIGNUP_SUCCESS';

export const handleSignupRequest = (payload) => ({
  type: SIGNUP_REQUEST,
  payload,
  isLoading: true,
});

export const handleSignupSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
  isLoading: false,
});

export const handleSignupFailed = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
  isLoading: false,
});

export function* onHandleSignupRequest({firstName, lastName, email, gradMonthYear, phoneNumber, password}) {
  console.log('#onHandleSignupRequest, firstName: %s, lastName: %s, email: %s, gradMonthYear: %s, phoneNumber: %s, password: %s', firstName, lastName, email, gradMonthYear, phoneNumber, password);
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
