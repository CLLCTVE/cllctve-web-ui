import mockUsers from './mock_users';
import {FORM_ERROR} from 'final-form';
import { renderMonthPicker } from '../components/fields/renderFields';

let users = [...mockUsers];

console.log('users: ', users);

const fakeDatabase = {
  users,
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const loginResponse = async ({email, password}) => {
  console.log('#loginResponse, email: %s, password: %s', email, password);

  return await delay(500).then(() => {
    let data;
    if (email === 'bailey1.brandon@gmail.edu') {
      console.log('no bailey1.brandon@gmail.edu found');
      data = {
        status: 'failed login',
        statusCode: 404,
      };
    } else {
      console.log('login successful');
      data = {
        status: 'ok',
        statusCode: 200,
        token: fakeDatabase.users[0].token,
        user: fakeDatabase.users[0].user,
      };
    }

    return data;
  });
};

export const signUpResponse = async ({firstName, lastName, gradMonthYear, email, password}) => {
  console.log('API#signupResponse, start');
  console.log(
    `firstName: ${firstName}, lastName: ${lastName}, gradMonthYear: ${gradMonthYear}, email: ${email}, password: ${password}`
  );

  const userInfo = fakeDatabase.users[0];
  return await delay(500).then(() => {
    let res = {
      status: 'created',
      statusCode: 201,
      data: {
        user: userInfo.user,
        token: userInfo.token
      }
    };
    console.log('API#signupResponse, done, res: ', res);
    return res;
  });
};

export const okResponse = () =>
  delay(500).then(() => {
    console.log('okResponse');
    return JSON.stringify({
      status: 'ok',
      statusCode: 200,
    });
  });
