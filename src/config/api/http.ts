import GLOBALS from './globals';
import {GetFunc, PutFunc, PostFunc, PatchFunc, DelFunc} from './http-mthd';

// API calls

export const GET_MOVIES = async () => {
  const url = `${GLOBALS.BASE_URL}api/movies`;
  return await GetFunc(url);
};

export const USER_DATA = async () => {
  const url = `${GLOBALS.BASE_URL}api/user/1234`;
  return await GetFunc(url);
};

export const USER_TRANSACTIONS = async () => {
  const url = `${GLOBALS.BASE_URL}api/transactions`;
  return await GetFunc(url);
};

export const TRANSACTION = async () => {
  const url = `${GLOBALS.BASE_URL}api/transaction/1234`;
  return await GetFunc(url);
};
