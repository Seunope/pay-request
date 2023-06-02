import axios from 'axios';
import AppStorage from '../services/AppStorage';

axios.interceptors.request.use(async config => {
  if (config) {
    config.timeout = 10000;
    config.headers['X-SERVICE-ID'] = 'ILEERO-APP';
    let token = await AppStorage.getData('token');
    if (token) {
      // console.log('i was in token');
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const onSuccess = (response: any) => {
  console.log('responseX', response.data);
  const k = response.data ? 'response.data' : 'response';
  // console.log('KKKKKK', k);
  return response.data ? response.data : response;
};

export const onError = (error: any) => {
  // return error.response;
  if (error.response) {
    // console.log(error.response);
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('Error Data', error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    //throw error.response.data;
    // throw new Error(error.response.data);
    if (error.response.data.message) {
      return error.response.data.message;
    }
    return error.response.data;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('Request', error.request);
    if (error.request._response) {
      return error.request._response;
    }
    return error.request;
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
    return error.message;
  }
};

export const GetFunc = async (path: string) => {
  return axios.get(path); //.then(onSuccess).catch(onError);
};

export const PostFunc = async (path: string, payload: any) => {
  return axios.post(path, payload); //.then(onSuccess).catch(onError);
};

export const PutFunc = async (path: string, payload: any) => {
  return axios.put(path, payload); //.then(onSuccess).catch(onError);
};

export const PatchFunc = async (path: string, payload: any) => {
  return axios.patch(path, payload); //.then(onSuccess).catch(onError);
};

export const DelFunc = async (path: string) => {
  return axios.delete(path); //.then(onSuccess).catch(onError);
};
