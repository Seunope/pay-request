import {PaginationData} from '../utils/types';
import GLOBALS from './globals';
import {GetFunc, PutFunc, PostFunc, PatchFunc, DelFunc} from './http-mthd';

// API calls
export const SIGNUP = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/signup`;
  return await PostFunc(url, data);
};

export const GENERATE_EMAIL_OTP = async (email: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/generate-email-otp/${email}`;
  return await GetFunc(url);
};
