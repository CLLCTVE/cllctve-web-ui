export function authHeader() {
  // return authorization header with jwt token
  let token = JSON.parse(localStorage.getItem('token'));
  let uid = JSON.parse(localStorage.getItem('uid'));

  let authToken = token && token.replace(/Bearer /g, "");
  
  let headersObj = {
    'x-auth-token': authToken,
    'Content-Type': 'application/json',
    withCredentials: true,
  };

  if (token) {
    return Object.assign(headersObj, {
      'Authorization': token,
      'uid': ' ' + uid,
      'x-auth-token': authToken
    });
  }

  debugger;
  
  return headersObj;
}
