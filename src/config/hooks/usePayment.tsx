import {USER_TRANSACTIONS, TRANSACTION} from '../api/http';
import {useQuery, useMutation} from 'react-query';

export const useTransactions = () => {
  return useQuery(['transaction-all'], USER_TRANSACTIONS, {
    select: data => {
      return data?.data?.data;
    },
  });
};

export const useTransaction = () => {
  return useQuery(['transaction'], TRANSACTION, {
    select: data => {
      return data?.data?.data;
    },
  });
};
