import {all, call, put, takeLatest} from 'redux-saga/effects';
import {push} from 'connected-react-router';
import request from '../../../lib/request';
import {FORM_ERROR} from 'final-form';
import { LOGIN_SUCCESS, setAuthToken, handleAuthenticated, handleLoginSuccess } from '../../auth/redux';
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './index';

export const ONBOARDING_REQUEST = 'creative/onboarding/ONBOARDING_REQUEST';
export const ONBOARDING_FAILURE = 'creative/onboarding/ONBOARDING_FAILURE';
export const ONBOARDING_SUCCESS = 'creative/onboarding/ONBOARDING_SUCCESS';

export const handleOnBoardingRequest = payload => ({
  type: ONBOARDING_SUCCESS,
  payload,
  isLoading: true,
});

export const handleOnBoardingSuccess = payload => ({
  type: ONBOARDING_SUCCESS,
  payload,
  isLoading: false,
});

export const handleOnBoardingFailed = payload => ({
  type: ONBOARDING_FAILURE,
  payload,
  isLoading: false,
});

export function* onHandleOnBoardingRequest({payload: {education, educations=[], skills=[], experience, experiences=[], licensesCert, licensesCerts=[], honorsAward, honorsAwards=[]}}) {
  console.log('#onHandleOnBoardingRequest');
  yield put(handleOnBoardingRequest());
  /*
      build the payload to send to the backend,
      only field that is required is education
   */
  
  let payload = {
    education: [education, ...educations],
    ...(skills && {skills})
  };
  
  try {
    const response = yield call(request.post, '/users/signup', payload);
    
    debugger;
    localStorage.setItem('user', JSON.stringify(response.data.user));
    yield all([
      put(handleOnBoardingSuccess(response.data.token)),
      put(setAuthToken(response.data.token)),
      put(push('/profile')),
    ]);
  } catch (err) {
    console.error('#onHandleOnBoardingRequest, catch block, err: ', err);
    debugger;
    if (err.response && (err.response.status === 422 || err.response.status === 404 || err.response.status === 401)) {
      yield put({
        type: ONBOARDING_SUCCESS,
        payload: {[FORM_ERROR]: err.response.data.message,
          ...err.response.data.errors
        },
      });
    }
  
    if (err.message && err.message === 'Network Error') {
      yield put({
        type: ONBOARDING_SUCCESS,
        payload: {[FORM_ERROR]: 'Check your connection and please try again later.'},
      });
    }
  
    if (err.response && err.response.status === 500) {
      yield put({
        type: ONBOARDING_SUCCESS,
        payload: {[FORM_ERROR]: 'Its not you, its us....... Please try again later.'},
      });
    }
    
    yield put(handleOnBoardingFailed(err));
  }
}

const INITIAL_STATE = {
  isLoading: false,
  error: null
};

export default function onBoarding(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ONBOARDING_REQUEST:
      return {...state, isLoading: true};
    case ONBOARDING_SUCCESS:
      console.log('SIGNUP_SUCCESS, action: ', action);
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    case ONBOARDING_FAILURE:
      debugger;
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}