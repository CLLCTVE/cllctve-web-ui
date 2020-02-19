import {all, call, put} from 'redux-saga/effects';

import {initStart, initFinish, initError} from './redux/index';

function* watchAppInit() {
  yield put(initStart());
  console.log('#watchAppInit, start');
  
  try {
    yield put(initFinish());
    console.log('#watchAppInit, finish');
  } catch (err) {
    console.error('Error: Failed to init App Saga, err: ', err);
    yield put(initError(err));
  }
}

export default function* sagas() {
  yield all([watchAppInit()]);
};
