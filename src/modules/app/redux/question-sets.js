export const GET_QUESTION_SETS_PENDING = 'app/question-sets/GET_QUESTION_SETS_PENDING';
export const GET_QUESTION_SETS_SUCCESS = 'app/question-sets/GET_QUESTION_SETS_SUCCESS';
export const GET_QUESTION_SETS_FAILURE = 'app/question-sets/GET_QUESTION_SETS_FAILURE';

const initialState = {
  data: [],
  isLoading: false,
  error: ''
};

export default function questionSets(state=initialState, action) {
  switch (action.type) {
    case GET_QUESTION_SETS_PENDING:
      return {...state, isLoading: false};
    case GET_QUESTION_SETS_FAILURE:
      return {...state, isLoading: false, error: action.payload, data: initialState.data};
    case GET_QUESTION_SETS_SUCCESS:
      return {...state, isLoading: false, data: action.payload};
    default:
      return state;
  }
};
