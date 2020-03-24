import {take, all} from 'redux-saga/effects';
import auth from './auth/sagas';
import signup from './signup/sagas';

export function* logActions() {
  while (true) {
    const action = yield take('*');
    console.log(action.type);
  }
}

export default function* rootSaga() {
  yield all([auth(), signup()]);
}
