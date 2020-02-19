import { all, call, put, take } from 'redux-saga/effects';

import {LOGIN_REQUEST} from './redux';

export function* loginFlow() {
  while (true) {
    const {email, password} = yield take()
  }
};

export default function* auth() {

};
