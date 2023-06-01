import * as yup from 'yup';

export const loanProviderSchema = yup.object().shape({
  jobTitle: yup
    .string()
    .min(4, () => 'This does not look like a Job tile')
    .required('Job tile is required'),
  businessName: yup
    .string()
    .min(2, ({min}) => `Business name should be more than ${min} characters`)
    .required('Business name is required'),
  employerName: yup
    .string()
    .min(5, () => 'Provide full company name')
    .required("Employer's name is required"),
});

export const loanProductSchema = yup.object().shape({
  defaultPercentage: yup.number().when(['isDefaultActive'], isDefaultActive => {
    if (isDefaultActive[0] === 'true') {
      return yup
        .number()
        .lessThan(5)
        .positive()
        .integer()
        .required('Default percentage required');
    } else {
      return yup.string().notRequired();
    }
  }),
  recoveryAgentRating: yup.number().when(['recoveryType'], recoveryType => {
    if (recoveryType[0] === 'public') {
      return yup
        .number()
        .lessThan(11)
        .positive()
        .integer()
        .required('Agent rating required');
    } else {
      return yup.string().notRequired();
    }
  }),
  recoveryPercentageCommission: yup
    .number()
    .when(['recoveryType'], recoveryType => {
      if (recoveryType[0] === 'public') {
        return yup
          .number()
          .lessThan(21)
          .positive()
          .integer()
          .required('Enter a percent of the loan');
      } else {
        return yup.string().notRequired();
      }
    }),
  maxPermissible: yup
    .number()
    .positive()
    .moreThan(5000)
    .integer()
    .required('Max amount permissible is required'),
  minPermissible: yup
    .number()
    .positive()
    .moreThan(999)
    .integer()
    .required('Min amount permissible is required'),
  isDefaultActive: yup.string().required('Will loan accrued defaults'),
  interest: yup
    .number()
    .lessThan(35)
    .positive()
    .integer()
    .required('Loan interest is required'),
  userCreditScore: yup
    .number()
    .lessThan(11)
    .positive()
    .integer()
    .required('User credit score that can access your loan is required'),
  loanName: yup
    .string()
    .min(3, ({min}) => `${min} characters is too small for a loan name`)
    .required('Loan name is required'),
  gracePeriod: yup.number().when(['isDefaultActive'], isDefaultActive => {
    if (isDefaultActive[0] === 'true') {
      return yup
        .number()
        .lessThan(8)
        .positive()
        .integer()
        .required('Grace period before default accrued is required');
    } else {
      return yup.string().notRequired();
    }
  }),
  recoveryType: yup.string().required('Recovery method is required'),
  loanUserType: yup.string().required('State of resident is required'),
  maxTenurePermissible: yup.string().required('State of resident is required'),
  loanType: yup.string().required('State of resident is required'),
});
