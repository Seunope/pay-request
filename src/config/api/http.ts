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

export const VERIFY_EMAIL = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/verification/verify-email-otp/${data.email}`;
  return await PutFunc(url, data);
};

export const LOGIN = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/login`;
  return await PostFunc(url, data);
};

export const FORGOT_PASSWORD = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/forgot-password`;
  return await PostFunc(url, data);
};

export const FORGOT_PASSWORD_RESET = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/forgot-password`;
  return await PutFunc(url, data);
};

export const VERIFICATION_STATUS = async () => {
  const url = `${GLOBALS.BASE_URL}user/v1/verification/customer-details`;
  return await GetFunc(url);
};

export const PERSONAL_INFO = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/personal-info`;
  return await PutFunc(url, data);
};

export const CHANGE_PHONE_NUMBER = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/change-phone-number`;
  return await PutFunc(url, data);
};

export const VALIDATE_PHONE_NUMBER = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/verification/verify-otp/${data.phoneNumber}`;
  return await PutFunc(url, data);
};

export const GENERATE_PHONE_OTP = async (phoneNumber: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/generate-otp/${phoneNumber}`;
  return await GetFunc(url);
};

export const VERIFY_BVN = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/verification/verify-bvn`;
  return await PostFunc(url, data);
};

export const UPDATE_PROFILE_IMAGE = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/update-profile-image`;
  return await PutFunc(url, data);
};

export const ADD_GUARANTOR = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/guarantor/create`;
  return await PostFunc(url, data);
};

export const ADD_EMPLOYMENT = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/employment-history/create`;
  return await PostFunc(url, data);
};

export const ADD_NATIONAL_ID = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/document/create`;
  return await PostFunc(url, data);
};

export const P_LOAN_PORTFOLIO = async () => {
  const url = `${GLOBALS.BASE_URL}loan/v1/provider-portfolio`;
  return await GetFunc(url);
};

export const CREATE_LOAN_PROVIDER = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}loan/v1/provider/create`;
  return await PostFunc(url, data);
};

export const CREATE_LOAN_PRODUCT = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}loan/v1/product/create`;
  return await PostFunc(url, data);
};

export const MY_LOAN_PRODUCT = async (data: PaginationData) => {
  let url = `${GLOBALS.BASE_URL}loan/v1/product/products?limit=${
    data.limit || 10
  }`;

  if (data.where) {
    url = url + `&where=${data.where}`;
  }
  if (data.next) {
    url = url + `&nextPageKey=${data.next}`;
  }
  if (data.prev) {
    url = url + `&previousPageKey=${data.prev}`;
  }
  console.log('url', url);
  return await GetFunc(url);
};

export const GET_WALLET = async (bvn?: string) => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/wallet?bvn=${bvn}`;
  return await GetFunc(url);
};

export const ADD_LOAN_BATCH = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}loan/v1/product/add-loans`;
  return await PostFunc(url, data);
};

export const GET_WALLET_BALANCE = async () => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/wallet/balance`;
  return await GetFunc(url);
};

export const ADD_DEVICE_INFO = async (data: any) => {
  const url = `${GLOBALS.BASE_URL}user/v1/device-record/find-create`;
  return await PostFunc(url, data);
};
