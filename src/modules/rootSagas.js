import {all} from 'redux-saga/effects';
import app from './app/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
  yield all([app(), auth()]);
}
