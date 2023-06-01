import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  phoneNumber: yup
    .number()
    // .lessThan(12, '11 digits phone number is required')
    .required('11 digits phone number is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required('Enter a valid email'),
});

export const forgotPasswordResetSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const signUpSchema = yup.object().shape({
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email().required('Email is required'),
  firstName: yup.string().required('First name is required'),
  phoneNumber: yup.number().required('11 digits phone number is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const personalInfoSchema = yup.object().shape({
  // dob: yup.string().required('Date of birth is required'),
  homeAddress: yup.string().required('Address is required'),

  // nationality: yup.string().required('Nationality is required'),
  // state: yup.string().required('State of resident is required'),
  // maritalStatus: yup.string().required('Marital status is required'),
});

export const guarantorSchema = yup.object().shape({
  name1: yup
    .string()
    .min(3, () => 'This does not look like a name')
    .required('Full name is required'),
  name2: yup
    .string()
    .min(3, () => 'This does not look like a name')
    .required('Full name is required'),
  name3: yup
    .string()
    .min(3, () => 'This does not look like a name')
    .required('Full name is required'),
  phoneNumber1: yup.number().required('11 digits phone number is required'),
  phoneNumber2: yup.number().required('11 digits phone number is required'),
  phoneNumber3: yup.number().required('11 digits phone number is required'),
});

export const employmentSchema = yup.object().shape({
  // stateCode: yup.string().optional(),
  employersName: yup.string().optional(),
  // workingTo: yup.string().required('Work to is required'),
  jobTitle: yup.string().optional(),
  monthlyIncome: yup.number().optional(),
  // startedWorkFrom: yup.string().required('Started Work is required'),
  // howAreYouPaid: yup.string().required('Payment method is required'),
  officeAddress: yup.string().optional(),
  officePhoneNumber: yup.string().optional(),
  // employmentStatus: yup
  //   .string()
  // .required('EmploymentStatus method  is required'),
});
