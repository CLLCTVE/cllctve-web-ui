import {all, fork, take, takeLatest, takeEvery} from 'redux-saga/effects';

import {SKILLS_REQUEST, BRAND_REQUEST, onHandleBrandRequest, onHandleSkillsRequest, onHandleAdminRequest} from './redux';

function* watchAdminFlow() {
  console.log('#watchAdminFlow');
  yield takeEvery([SKILLS_REQUEST, BRAND_REQUEST], onHandleAdminRequest);
}

export default function* sagas() {
  yield all([watchAdminFlow()]);
}
