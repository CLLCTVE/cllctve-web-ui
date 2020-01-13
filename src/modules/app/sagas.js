import {all, call, put} from 'redux-saga/effects';

import {initStart, initFinish, initError} from './redux/index';

import { fetchQuestionSets } from '../../api';
import { GET_QUESTION_SETS_FAILURE, GET_QUESTION_SETS_PENDING, GET_QUESTION_SETS_SUCCESS } from "./redux/question-sets";



const pending = () => ({
  type: GET_QUESTION_SETS_PENDING,
});

const success = (payload) => ({
  type: GET_QUESTION_SETS_SUCCESS,
  payload,
});

const failure = error => ({
  type: GET_QUESTION_SETS_FAILURE,
  payload: error,
  error: true,
});

function* getQuestionSets() {
  yield put(pending());
  
  try {
    const res = yield call(fetchQuestionSets);
    yield put(success(res.data));
    
    return { questionSets: res.data };
  } catch(err) {
    // console.error('Error: #getQuestionSets. err:', err);
    yield put(failure(err));
    return { err };
  }
}

function* watchAppInit() {
  yield put(initStart());
  
  try {
    yield call(getQuestionSets);
    yield put(initFinish());
  } catch (err) {
    console.error('Error: Failed to init App Saga, err: ', err);
    yield put(initError(err));
  }
}

export default function* sagas() {
  yield all([watchAppInit()]);
};
