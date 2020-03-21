import { all, takeLatest } from 'redux-saga/effects';


import {
  LOGIN_REQUEST,
} from './redux';

import { FORM_ERROR } from 'final-form';

function* loginFlow(action) {
  console.log('#loginFlow, action: ', action);
  try {
    console.error('#loginFlow try block');
    
  } catch(err) {
    console.error('#loginFlow catch block, err: ', err);
    
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
