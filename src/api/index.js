import {v4} from 'uuid';
import mockUsers from './mock_users';

let users = [...mockUsers];

console.log('users: ', users);

const fakeDatabase = {
  users
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const loginResponse = async ({email, password}) => {
  console.log('API#loginRequest, start');
  console.log(`email: ${email}, password: ${password}`);
  
  const userInfo = fakeDatabase.users[0];
  return await delay(10).then(() => {
    let data =  {
      status: 'ok',
      statusCode: 200,
      token: userInfo.token,
      user: userInfo.user
    };
    console.log('API#loginRequest, done');
    return data;
  });
};

export const signupResponse = async ({ firstName, lastName, creativeName, email, password }) => {
  console.log('API#signupResponse, start');
  console.log(`firstName: ${firstName}, lastName: ${lastName}, creativeName: ${creativeName}, email: ${email}, password: ${password}`);
  
  const userInfo = fakeDatabase.users[0];
  return await delay(500).then(() => {
    let data =  {
      status: 'ok',
      statusCode: 201,
    };
    console.log('API#signupResponse, done');
    return data;
  });
}

export const okResponse = () =>
  delay(500).then(() => {
    console.log('okResponse');
    return JSON.stringify({
      status: 'ok',
      statusCode: 200
    });
  });
