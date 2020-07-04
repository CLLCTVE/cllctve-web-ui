import {all, call, put} from 'redux-saga/effects';
import request from '../../../lib/request';
import {FORM_ERROR} from 'final-form';

export const WISHLIST_REQUEST = 'landing/wishlist/WISHLIST_REQUEST';
export const WISHLIST_FAILURE = 'landing/wishlist/WISHLIST_FAILURE';
export const WISHLIST_SUCCESS = 'landing/wishlist/WISHLIST_SUCCESS';

export const handleWishListRequest = () => ({
    type: WISHLIST_REQUEST,
    isLoading: true,
});

export const handleWishListSuccess = () => ({
    type: WISHLIST_SUCCESS,
    isLoading: false
});

export function* onHandleWishListRequest({firstName, lastName, email, major, skills=[]}) {
    console.log('#onHandleWishListRequest');

    let payload = {
        firstName,
        lastName,
        email,
        major,
        ...(skills && {skills})
    };

    try {
        console.log('#onHandleWishListRequest, try block');
        const response = yield call(request.post, '/landing/wishlist', payload)

        console.log('#onHandleWishListRequest, response: ', response);
        yield put(handleWishListSuccess())
    } catch (err) {
        console.error('Error, failed to handle wish list request, err: ', err);
        yield put(handleWishListFailure(err))
    }
}