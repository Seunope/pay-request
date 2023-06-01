import {Formik} from 'formik';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Utility from '../../../../config/utils/utils';
import InputBar from '../../../../components/InputBar';
import PickerBar from '../../../../components/PickerBar';
import ErrorText from '../../../../components/ErrorText';
import {StackNavigationProp} from '@react-navigation/stack';
import Toasts from '../../../../config/services/toast/Toast';
import AppContainer from '../../../../components/AppContainer';
import {useCreateProduct} from '../../../../config/hooks/useLoan';
import ButtonDynamic from '../../../../components/DynamicButton';
import React, {useState, useRef, useContext, useEffect} from 'react';
import {onError, onSuccess} from '../../../../config/api/http-mthd';
import {AlertDialog, Text, Select, VStack, Button} from 'native-base';
import {loanProductSchema} from '../../../../config/schema/loan.schema';
import {AppStateContext} from '../../../../config/utils/context/app_state';
import {OptionalLoanProductData} from '../../../../config/utils/types';

export default () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formIkData, setFormIkData] = useState<any>();
  const [providerId, setProviderId] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<any>();
  const [processingFee, setProcessingFee] = useState<string>();
  const {contextValue, updateContext} = useContext(AppStateContext);
  const navigation = useNavigation<StackNavigationProp<{route: {}}>>();
  const {mutate, data, reset, isLoading, isError, error} = useCreateProduct();

  useEffect(() => {
    preload();
  }, []);

  const preload = () => {
    const provider = contextValue.lProvider;
    setProcessingFee(provider.providerProcessingFee);
    setProviderId(provider.id);
  };
  const doVerifyData = (values: any) => {
    Keyboard.dismiss();
    setFormIkData({...values});
    setIsOpen(true);
  };

  const doSubmit = async () => {
    setIsOpen(false);
    setErrorMessage(null);
    const values = formIkData;

    const optionalData = {} as OptionalLoanProductData;
    if (values.defaultPercentage !== '') {
      optionalData.defaultPercentage = Number(values.defaultPercentage);
    }
    if (values.recoveryAgentRating !== '') {
      optionalData.recoveryAgentRating = Number(values.recoveryAgentRating);
    }

    if (values.gracePeriod !== '') {
      optionalData.gracePeriod = Number(values.gracePeriod);
    }

    if (values.recoveryPercentageCommission !== '') {
      optionalData.recoveryPercentageCommission = Number(
        values.recoveryPercentageCommission,
      );
    }

    mutate({
      processingFee,
      ...optionalData,
      loanName: values.loanName,
      loanType: values.loanType,
      loanProviderId: providerId,
      interest: Number(values.interest),
      recoveryType: values.recoveryType,
      loanUserType: values.loanUserType,
      maxPermissible: Number(values.maxPermissible),
      minPermissible: Number(values.minPermissible),
      userCreditScore: Number(values.userCreditScore),
      maxTenurePermissible: Number(values.maxTenurePermissible),
      isDefaultActive: values.isDefaultActive === 'true' ? true : false,
    });
  };

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);
    setErrorMessage(msg);
    reset(); //prevent api call on state change
  }

  if (data) {
    const res = onSuccess(data);
    Toasts.success(res.message);
    reset(); //prevent api call on state change
    navigation.replace('LoanStack', {
      screen: 'ProductList',
    });
  }

  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  return (
    <AppContainer
      scrollAble={true}
      headerTxt="Create Loan Product"
      subHeaderTxt="Loan product are what our customer will see in the market place">
      <Formik
        validationSchema={loanProductSchema}
        initialValues={{
          loanType: '',
          loanName: '',
          interest: '',
          gracePeriod: '',
          recoveryType: '',
          loanUserType: '',
          maxPermissible: '',
          minPermissible: '',
          isDefaultActive: '',
          userCreditScore: '',
          defaultPercentage: '',
          recoveryAgentRating: '',
          maxTenurePermissible: '',
          recoveryPercentageCommission: '',
        }}
        onSubmit={values => doVerifyData(values)}>
        {({handleChange, handleSubmit, isValid, errors, values}) => (
          <VStack space="4">
            <InputBar
              name="loanName"
              label="Loan Name"
              value={values.loanName}
              error={errors?.loanName}
              placeholder="Enter loan name"
              onChangeText={handleChange('loanName')}
            />

            <PickerBar
              name="loanType"
              placeholder="Select"
              label="Loan Type"
              error={errors.loanType}
              selectedItem={values.loanType}
              onValueChange={handleChange('loanType')}
              pickerData={[
                <Select.Item
                  label="Private: Loan for your friends"
                  value="private"
                  key="private"
                />,
                <Select.Item
                  label="Public: Loan for anyone "
                  value="public"
                  key="public"
                />,
              ]}
            />

            <PickerBar
              name="recoveryType"
              placeholder="Select"
              label="Loan Recovery"
              error={errors.recoveryType}
              selectedItem={values.recoveryType}
              onValueChange={handleChange('recoveryType')}
              pickerData={[
                <Select.Item
                  label="Private: Recover loan myself"
                  value="private"
                  key="private"
                />,
                <Select.Item
                  label="Public: Recover loan with agents"
                  value="public"
                  key="public"
                />,
              ]}
            />

            {values.recoveryType === 'public' ? (
              <>
                <InputBar
                  keyboardType="number-pad"
                  name="recoveryPercentageCommission"
                  placeholder="Recovery Agent commission"
                  value={values.recoveryPercentageCommission}
                  error={errors?.recoveryPercentageCommission}
                  label="Agent commission from 1- 20% of loan value"
                  onChangeText={handleChange('recoveryPercentageCommission')}
                />

                <InputBar
                  name="recoveryAgentRating"
                  keyboardType="number-pad"
                  label="Recovery agent rating"
                  value={values.recoveryAgentRating}
                  error={errors?.recoveryAgentRating}
                  onChangeText={handleChange('recoveryAgentRating')}
                  placeholder="Enter between 0 & 10. 10 being the best score"
                />
              </>
            ) : null}

            <PickerBar
              placeholder="Select"
              label="Customer Type"
              name="loanUserType"
              error={errors.loanUserType}
              selectedItem={values.loanUserType}
              onValueChange={handleChange('loanUserType')}
              pickerData={[
                <Select.Item
                  label="Borrower whose salary is paid via bank transfer"
                  value="regular"
                  key="regular"
                />,
                <Select.Item
                  label="Borrower whose salary is paid with Remita"
                  value="remita"
                  key="remita"
                />,
                <Select.Item
                  label="Borrower whose salary is paid with IPPIS"
                  value="ippis"
                  key="ippis"
                />,
              ]}
            />

            {/* <InputBar
              isDisabled={true}
              placeholder="1%"
              name="processingFee"
              label="Processing Fee"
              keyboardType="number-pad"
              value={processingFee}
            /> */}

            <InputBar
              name="interest"
              label="Interest Rate"
              value={values.interest}
              error={errors?.interest}
              keyboardType="number-pad"
              placeholder="Interest Rate"
              onChangeText={handleChange('interest')}
            />

            <InputBar
              name="maxPermissible"
              label={`Maximum Loan amount: ${Utility.formatAmount(
                Number(values.maxPermissible),
              )}`}
              placeholder="Max Loan Amount"
              value={values.maxPermissible}
              error={errors?.maxPermissible}
              keyboardType="number-pad"
              onChangeText={handleChange('maxPermissible')}
            />

            <InputBar
              name="minPermissible"
              keyboardType="number-pad"
              label={`Minimum Loan amount: ${Utility.formatAmount(
                Number(values.minPermissible),
              )}`}
              placeholder="Min Loan Amount"
              value={values.minPermissible}
              error={errors?.minPermissible}
              onChangeText={handleChange('minPermissible')}
            />

            <InputBar
              name="userCreditScore"
              keyboardType="number-pad"
              label="Customer Credit Score"
              value={values.userCreditScore}
              error={errors.userCreditScore}
              onChangeText={handleChange('userCreditScore')}
              placeholder="Enter between 0 & 10. 10 being the best score"
            />

            <PickerBar
              placeholder="Select"
              label="Max Tenure"
              name="maxTenurePermissible"
              error={errors.maxTenurePermissible}
              selectedItem={values.maxTenurePermissible}
              onValueChange={handleChange('maxTenurePermissible')}
              pickerData={[
                <Select.Item label="7 days" value="7" key="7" />,
                <Select.Item label="21 days" value="21" key="21" />,
                <Select.Item label="30 days" value="30" key="30" />,
                <Select.Item label="60 days" value="60" key="60" />,
                <Select.Item label="90 days" value="90" key="90" />,
                <Select.Item label="120 days" value="120" key="120" />,
              ]}
            />

            <PickerBar
              placeholder="Select"
              label="Activate Defaults"
              name="isDefaultActive"
              error={errors.isDefaultActive}
              selectedItem={values.isDefaultActive}
              onValueChange={handleChange('isDefaultActive')}
              pickerData={[
                <Select.Item label="True" value="true" key="true" />,
                <Select.Item label="False" value="false" key="false" />,
              ]}
            />

            {values.isDefaultActive === 'true' ? (
              <>
                <InputBar
                  name="gracePeriod"
                  keyboardType="number-pad"
                  value={values.gracePeriod}
                  error={errors.gracePeriod}
                  label="Default Grace Period"
                  onChangeText={handleChange('gracePeriod')}
                  placeholder="Enter 0 or 7days before default start accruing"
                />

                <InputBar
                  name="defaultPercentage"
                  keyboardType="number-pad"
                  value={values.defaultPercentage}
                  error={errors.defaultPercentage}
                  label="Default percentage"
                  onChangeText={handleChange('defaultPercentage')}
                  placeholder="Accrued defaults as a percentage of loan"
                />
              </>
            ) : null}

            <ErrorText message={errorMessage} />

            <ButtonDynamic
              btnTxt="Next"
              btnType="primary"
              onPress={handleSubmit}
              loading={isLoading}
              fieldStatus={
                isValid &&
                values.loanName &&
                values.interest &&
                values.maxPermissible &&
                values.minPermissible &&
                values.userCreditScore &&
                values.isDefaultActive &&
                values.loanType &&
                values.recoveryType &&
                values.loanUserType &&
                values.maxTenurePermissible
                  ? true
                  : false
              }
            />
          </VStack>
        )}
      </Formik>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.Header>Summary</AlertDialog.Header>
          <AlertDialog.Body>
            <Text fontSize="sm" mb="2">
              For a loan of {Utility.formatAmount(formIkData?.maxPermissible)}{' '}
              you will earn {formIkData?.interest}% interest i.e{' '}
              {Utility.formatAmount(
                (formIkData?.maxPermissible * formIkData?.interest) / 100,
              )}
              . Groupay processing fee is {processingFee}% i.e{' '}
              {Utility.formatAmount(
                (formIkData?.maxPermissible * Number(processingFee)) / 100,
              )}{' '}
              will be charged.
            </Text>

            <Text fontSize="2xs" mb="4" color="gray.100">
              Groupay processing fee covers our expenses to run our servers and
              manage our staffs
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
                size="sm">
                Go Back
              </Button>
              <Button
                colorScheme="primary"
                onPress={() => doSubmit()}
                size="sm"
                _text={{
                  px: '0',
                }}>
                Create Product
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </AppContainer>
  );
};
