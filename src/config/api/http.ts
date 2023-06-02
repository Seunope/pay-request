import GLOBALS from './globals';
import {GetFunc, PostFunc} from './http-mthd';

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

export const POST_TRANSACTION = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}api/transaction/1234`;
  return await PostFunc(url, data);
};
