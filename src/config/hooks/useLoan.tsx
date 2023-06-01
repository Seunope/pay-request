import {PaginationData} from '../utils/types';
import {useQuery, useMutation} from 'react-query';
import {
  ADD_LOAN_BATCH,
  MY_LOAN_PRODUCT,
  P_LOAN_PORTFOLIO,
  CREATE_LOAN_PRODUCT,
  CREATE_LOAN_PROVIDER,
} from '../api/http';

export const useLoanProvider = () => {
  return useMutation(CREATE_LOAN_PROVIDER);
};

export const useCreateProduct = () => {
  return useMutation(CREATE_LOAN_PRODUCT);
};

export const useAddLoanBatch = () => {
  return useMutation(ADD_LOAN_BATCH);
};

//// QUERY //////////
/////////////////////
export const useGetProviderPortfolio = () => {
  return useQuery(['provider-portfolio'], P_LOAN_PORTFOLIO, {});
};

export const useMyLoanProduct = (data: PaginationData) => {
  return useQuery(['my-loan-products'], () => MY_LOAN_PRODUCT(data), {});
};
