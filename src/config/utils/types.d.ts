type Visibility = 'pubic' | 'private';
type LoanCategory = 'remita' | 'ippis' | 'regular';

export interface ParentContainer {
  // headerTxt?: string;
  // hasHeader?: boolean;
  showNotify?: boolean;
  showBack?: boolean;
  // isDashboard?: boolean;
  scrollAble?: boolean;
  // checkSession?: boolean;
  children: React.ReactNode;
}

export interface UserVerification {
  status?: boolean;
  bvnScore?: number;
  bvnCalls?: number;
  platform?: string;
  bvnResult: object;
  customerId: string;
  bvnNumber?: string;
  hasFaceId: boolean;
  bvnLastName: string;
  canBeAgent: boolean;
  bvnFirstName: string;
  canTakeLoan: boolean;
  hasGuarantor: boolean;
  hasNationalId: boolean;
  isBVNVerified: boolean;
  hasEmployment: boolean;
  canBeProvider: boolean;
  hasContactList: boolean;
  bvnDateOfBirth?: string;
  bvnPhoneNumber?: string;
  hasPersonInfo: boolean;
  isEmailVerified: boolean;
  isPhoneNumberVerified: boolean;
}

export interface OptionalLoanProductData {
  gracePeriod?: number;
  defaultPercentage?: number;
  recoveryAgentRating?: number;
  recoveryPercentageCommission?: number;
}

export interface LoanProduct {
  meta?: object;
  loanName: string;
  interest: number;
  customerId: string;
  totalLoans?: number;
  loanType: Visibility;
  activeLoans?: number;
  gracePeriod?: number;
  batchReference: string;
  processingFee: number;
  maxPermissible: number;
  availableLoans?: number;
  minPermissible: number;
  loanProviderId: string;
  canceledLoans?: number;
  userCreditScore: number;
  completedLoans?: number;
  recoveryType: Visibility;
  isDefaultActive: boolean;
  defaultPercentage?: number;
  loanUserType: LoanCategory;
  processingFeeAmount?: number;
  recoveryAgentRating: number;
  completedLoanValue?: number;
  maxTenurePermissible: number;
  recoveryPercentageCommission: number;
}

export interface Pagination {
  totalCount?: number;
  nextPageKey: string;
  hasNextPage: boolean;
  previousPageKey: string;
  hasPreviousPage: boolean;
}

export interface PaginationData {
  prev?: string;
  where?: any;
  limit?: number;
  next?: string | undefined;
}
export {};
