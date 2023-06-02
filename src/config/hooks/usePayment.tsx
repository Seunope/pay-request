import {useQuery, useMutation} from 'react-query';
import {USER_TRANSACTIONS, TRANSACTION, POST_TRANSACTION} from '../api/http';

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

export const useAddTransaction = () => {
  return useMutation(POST_TRANSACTION);
};
