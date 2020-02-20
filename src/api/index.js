import {v4} from 'uuid';
import mockUsers from './mock_users';

let users = [...mockUsers];

console.log('users: ', users);

const fakeDatabase = {
  users
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const loginResponse = ({email, password}) => {
  console.log('#loginResponse, email: %s, password: %s', email, password);
  return delay(10).then(() => {
    let data =  {
      status: 'ok',
      statusCode: 200,
      token: fakeDatabase.users[0].token,
      user: fakeDatabase.users[0].user
    };
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

export const okResponse = () => (
  delay(500).then(() => {
    console.log('okResponse');
    return JSON.stringify({
      status: 'ok',
      statusCode: 200
    });
  }));
