import {useQuery} from 'react-query';
import {GET_WALLET, GET_WALLET_BALANCE} from '../api/http';

//// QUERY //////////
/////////////////////

export const useGetWallet = (bvn?: string) => {
  return useQuery(['user-wallet'], () => GET_WALLET(bvn), {
    enabled: false,
    select: data => {
      return data?.data?.data;
    },
  });
};

export const useGetWalletBalance = () => {
  return useQuery(['wallet-balance'], GET_WALLET_BALANCE, {
    select: data => {
      return data?.data?.data;
    },
  });
};
