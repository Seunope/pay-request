import {
  SIGNUP,
  LOGIN,
  VERIFY_BVN,
  VERIFY_EMAIL,
  PERSONAL_INFO,
  ADD_GUARANTOR,
  ADD_EMPLOYMENT,
  ADD_NATIONAL_ID,
  FORGOT_PASSWORD,
  ADD_DEVICE_INFO,
  GENERATE_PHONE_OTP,
  GENERATE_EMAIL_OTP,
  VERIFICATION_STATUS,
  CHANGE_PHONE_NUMBER,
  UPDATE_PROFILE_IMAGE,
  VALIDATE_PHONE_NUMBER,
  FORGOT_PASSWORD_RESET,
} from '../api/http';
import {useQuery, useMutation} from 'react-query';
import {onError, onSuccess} from '../api/http-mthd';

//// MUTUTATE //////
export const useCreateUser = () => {
  return useMutation(SIGNUP);
};

export const useLoginUser = () => {
  return useMutation(LOGIN);
};

export const useForgotPassword = () => {
  return useMutation(FORGOT_PASSWORD);
};

export const useForgotPasswordReset = () => {
  return useMutation(FORGOT_PASSWORD_RESET);
};

export const useVerifyEmail = () => {
  return useMutation(VERIFY_EMAIL);
};

export const usePersonalInfo = () => {
  return useMutation(PERSONAL_INFO, {
    onSuccess: onSuccess,
    onError: onError,
  });
};

export const useChangePhoneNUmber = () => {
  return useMutation(CHANGE_PHONE_NUMBER);
};

export const useVerifyPhoneNUmber = () => {
  return useMutation(VALIDATE_PHONE_NUMBER);
};

export const useVerifyBVN = () => {
  return useMutation(VERIFY_BVN);
};

export const useUpdateProfileImage = () => {
  return useMutation(UPDATE_PROFILE_IMAGE);
};

export const useAddGuarantor = () => {
  return useMutation(ADD_GUARANTOR);
};

export const useAddEmployment = () => {
  return useMutation(ADD_EMPLOYMENT);
};

export const useAddNationalID = () => {
  return useMutation(ADD_NATIONAL_ID);
};

export const useAddDevice = () => {
  return useMutation(ADD_DEVICE_INFO);
};

//// QUERY //////////
/////////////////////

export const useGetEmailOTP = (email: string) => {
  return useQuery(['user-email-otp'], () => GENERATE_EMAIL_OTP(email), {
    enabled: false,
  });
};

export const useGetVerificationStatus = () => {
  return useQuery(['user-verification-status'], VERIFICATION_STATUS, {
    // retryDelay: retryCount => {
    //   console.log('retryCount', retryCount);
    //   return retryCount === 0 ? 1000 : 5000;
    // },
    select: data => {
      return data?.data?.data;
    },
  });
};

export const useGetPhoneOTP = (phoneNumber: string) => {
  return useQuery(['user-phone-otp'], () => GENERATE_PHONE_OTP(phoneNumber), {
    enabled: false,
    select: data => {
      return data?.data?.data;
    },
  });
};
