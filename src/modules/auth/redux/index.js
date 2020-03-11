export const LOGIN_REQUEST = 'auth/login/LOGIN_REQUEST';
export const LOGIN_FAILURE = 'auth/login/LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'auth/login/LOGIN_SUCCESS';
export const LOGIN_CANCELLED = 'auth/login/LOGIN_CANCELLED';

export const AUTHENTICATED = 'auth/login/AUTHENTICATED';
export const UNAUTHENTICATED = 'auth/login/UNAUTHENTICATED';

export const LOGOUT_REQUEST = 'auth/logout/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'auth/logout/LOGOUT_SUCCESS';

let user = JSON.parse(localStorage.getItem('user'));

const INITIAL_STATE = user
  ? {
    authenticated: true,
    user: user,
    token: null,
    isLoading: false,
    error: null,
  }
  : {
    user: null,
    token: null,
    authenticated: false,
    isLoading: false,
    error: null,
  };

export const handleLoginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
  isLoading: true,
});

export const handleLoginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const handleLoginCancelled = () => ({
  type: LOGIN_CANCELLED
});

export const handleLoginFailed = (payload) => ({
  type: LOGIN_FAILURE,
  payload
});

export const handleLogoutRequest = () => ({
  type: LOGOUT_REQUEST,
  user: null,
  token: null
});

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    // case LOGIN_REQUEST:
    //   console.log(LOGIN_REQUEST);
    //   return {...state, isLoading: true, authenticated: false};
    case LOGIN_SUCCESS:
      return {...state, isLoading: false, authenticated: true, user: action.payload};
    case LOGIN_FAILURE:
      console.log('fucking login failure');
      return {...state, isLoading: false, authenticated: false, error: action.payload};
    case LOGOUT_REQUEST:
      return {...state, isLoading: true, authenticated: false};
    case LOGOUT_SUCCESS:
      return {...state, isLoading: false, authenticated: false};
    case AUTHENTICATED:
      return {...state, authenticated: true};
    case UNAUTHENTICATED:
      return {...state, authenticated: false};
    default:
      return state;
  }
}
