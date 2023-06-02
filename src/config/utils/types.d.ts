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

export interface User {
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
}

export {};
