export const LOGIN_REQUEST = 'auth/login/LOGIN_REQUEST';
export const LOGIN_FAILURE = 'auth/login/LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'auth/login/LOGIN_SUCCESS';
export const AUTHENTICATED = 'auth/login/AUTHENTICATED';
export const UNAUTHENTICATED = 'auth/login/UNAUTHENTICATED';

let user = JSON.parse(localStorage.getItem('user'));

const INITIAL_STATE = user
  ? {
    authenticated: true,
    user: user,
    isLoading: false,
    error: null,
  }
  : {
    user: null,
    authenticated: false,
    isLoading: false,
    error: null,
  };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log(LOGIN_REQUEST);
      return {...state, isLoading: true, authenticated: false};
    case LOGIN_SUCCESS:
      return {...state, isLoading: false, authenticated: true, user: action.payload};
    case LOGIN_FAILURE:
      return {...state, isLoading: false, authenticated: false, error: action.payload};
    case AUTHENTICATED:
      return {...state, authenticated: true};
    case UNAUTHENTICATED:
      return {...state, authenticated: false};
    default:
      return state;
  }
}
