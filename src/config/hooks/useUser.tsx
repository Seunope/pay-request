import {SIGNUP, GENERATE_EMAIL_OTP} from '../api/http';
import {useQuery, useMutation} from 'react-query';
import {onError, onSuccess} from '../api/http-mthd';

//// MUTUTATE //////
export const useCreateUser = () => {
  return useMutation(SIGNUP);
};

//// QUERY //////////
/////////////////////

export const useGetEmailOTP = (email: string) => {
  return useQuery(['user-email-otp'], () => GENERATE_EMAIL_OTP(email), {
    enabled: false,
  });
};

