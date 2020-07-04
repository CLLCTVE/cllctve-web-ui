import {all, call, cancel, fork, take, takeLatest} from 'redux-saga/effects';

import {
  WISHLIST_REQUEST,
  onHandleWishlistRequest
} from './redux';

function* watchWishList() {
  console.log('#watchWishList');
    yield takeLatest(WISHLIST_REQUEST, onHandleWishlistRequest);
}

export default function* sagas() {
  yield all([watchWishList()]);
}
