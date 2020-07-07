import {all, call, put} from 'redux-saga/effects';
import request from '../../../lib/request';
import {FORM_ERROR} from 'final-form';

export const WISHLIST_REQUEST = 'landing/wishlist/WISHLIST_REQUEST';
export const WISHLIST_FAILURE = 'landing/wishlist/WISHLIST_FAILURE';
export const WISHLIST_SUCCESS = 'landing/wishlist/WISHLIST_SUCCESS';

export const handleWishListRequest = (payload) => ({
    type: WISHLIST_REQUEST,
    isLoading: true,
    payload
});

export const handleWishListSuccess = () => ({
    type: WISHLIST_SUCCESS,
    isLoading: false
});

export const handleWishListFailure = () => ({
    type: WISHLIST_FAILURE,
    isLoading: false
});

export function* onHandleWishListRequest({payload: {firstName, lastName, email, major, skills=[]}}) {
    
    console.log('#onHandleWishListRequest, firstName: %s, lastName: %s, email: %s, major: %s', firstName, lastName, email, major);
    console.log('#onHandleWishListRequest, skills: ', skills);


    let payload = {
        firstName,
        lastName,
        email,
        major,
        ...(skills && {skills})
    };

    console.log('#onHandleWishListRequest, payload: ', payload);

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

// ****************** SETTING INITAL STATE OF REDUCER ******************

const INITIAL_STATE = {
    isLoading: false,
    error: null
  };

  
// ******************  LANDING PAGE REDUCER ******************

export default function landing(state = INITIAL_STATE, action) {
    switch (action.type) {
        case WISHLIST_REQUEST:
            return {...state, isLoading: true};
        case WISHLIST_SUCCESS:
            return {...state, isLoading: false};
        case WISHLIST_FAILURE:
            return {
                ...state,
                 isLoading: false,
                  error: action.payload.errors
                };
        default:
            return state;
    }
}