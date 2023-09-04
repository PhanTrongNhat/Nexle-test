import axios from 'axios';
import queryString from 'query-string';

const { CancelToken } = axios;
export const sourceCancel = CancelToken.source();

const baseURLIdentity = `http://streaming.nexlesoft.com:3001`;

// identity service
const identityService = axios.create({
  baseURL: baseURLIdentity,
  // withCredentials: true,
  cancelToken: sourceCancel.token,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

identityService.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    throw error;
  }
);

export const getTokenBearer = () =>
  identityService.defaults.headers.common.Authorization;

export const updateTokenBearer = (token: string) => {
  identityService.defaults.headers.common.Authorization = token;
};

export default identityService;
