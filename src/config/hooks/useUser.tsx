import {USER_DATA} from '../api/http';
import {useQuery} from 'react-query';

export const useUserData = () => {
  return useQuery(['user-data'], USER_DATA, {
    select: data => {
      return data?.data?.data;
    },
  });
};
