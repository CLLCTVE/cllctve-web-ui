import axios from 'axios';
import qs from 'qs';
import { authHeader } from './auth_headers';

const API_URL = 'http://localhost:3001/api';

export default {
  del: (url, data, origin) => makeRequest(url, 'delete', data, origin),
  get: (url, data, origin) => makeRequest(url, 'get', data, origin),
  post: (url, data, origin) => makeRequest(url, 'post', data, origin),
  put: (url, data, origin) => makeRequest(url, 'put', data, origin),
};

const makeRequest = async (url, method, requestData, origin) => {
  // Remove leading slash if it's present
  if (url.startsWith('/')) {
    url = url.substr(1);
  }
  
  let apiUrl = `${origin || API_URL}/${{url}}`;
  let config = {
    ...authHeader(),
    method,
    url: apiUrl,
    paramsSerializer: params => {
      return qs.stringify(params, { arrayFormat: 'brackets' });
    },
  };
  
  if (requestData) {
    config = {
      ...config,
      ...requestData
    }
  }
  
  try {
    console.log('#request, making request...');
    const res = await axios(config);
    console.log('#request, data: ', res.data);
    return res.data;
  } catch (err) {
    console.error('Error: Failed to make request, err: ', err);
  }
};


