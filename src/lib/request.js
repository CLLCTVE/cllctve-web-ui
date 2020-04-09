import axios from 'axios';
import qs from 'qs';
import {authHeader} from './auth_headers';
import env from './env';

import * as API from '../api';

const API_URL = `${env.REACT_APP_CLLCTVE_API_ORIGIN}/api`;

export default {
  del: (url, data, origin) => makeRequest(url, 'delete', data, origin),
  get: (url, data, origin) => makeRequest(url, 'get', data, origin),
  post: (url, data, origin) => makeRequest(url, 'post', data, origin),
  put: (url, data, origin) => makeRequest(url, 'put', data, origin),
};

const makeRequest = async (url, method, requestData, origin) => {
  // Remove leading slash if present
  if (url.startsWith('/')) {
    url = url.substr(1);
  }

  let apiUrl = `${origin || API_URL}/${url}`;
  let config = {
    ...authHeader(),
    method,
    url: apiUrl,
    paramsSerializer: params => {
      return qs.stringify(params, {arrayFormat: 'brackets'});
    },
  };

  if (requestData) {
    config = {
      ...config,
      data: requestData,
    };
  }

  const req = await axios(config);
  return req;
};

const mockRequest = async (url, method, requestData, origin) => {
  console.log('#mockRequest');
  if (url.startsWith('/')) {
    url = url.substr(1);
  }

  let apiUrl = `${origin || API_URL}/${{url}}`;
  let config = {
    ...authHeader(),
    method,
    url: apiUrl,
    paramsSerializer: params => {
      return qs.stringify(params, {arrayFormat: 'brackets'});
    },
  };

  if (requestData) {
    config = {
      ...config,
      data: requestData,
    };
  }

  try {
    switch (url) {
      case 'auth/login':
        return await API.loginResponse({email: config.email, password: config.password});
      case 'users/signup':
        return await API.signUpResponse({
          firstName: config.data.firstName,
          lastName: config.data.lastName,
          gradMonthYear: config.data.gradMonthYear,
          email: config.data.email,
          password: config.data.password,
        });
      default:
        return await API.okResponse();
    }
  } catch (err) {
    console.error('Error: Failed to make request, err: ', err);
  }
};
