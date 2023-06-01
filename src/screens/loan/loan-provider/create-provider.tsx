import {Formik} from 'formik';
import {Keyboard} from 'react-native';
import {Select, VStack} from 'native-base';
import React, {useState, useContext} from 'react';
import InputBar from '../../../components/InputBar';
import {useNavigation} from '@react-navigation/core';
import PickerBar from '../../../components/PickerBar';
import ErrorText from '../../../components/ErrorText';
import Toasts from '../../../config/services/toast/Toast';
import AppContainer from '../../../components/AppContainer';
import nigeriaStates from '../../../config/data/all_states';
import ButtonDynamic from '../../../components/DynamicButton';
import allIndustries from '../../../config/data/all_industries';
import {useLoanProvider} from '../../../config/hooks/useLoan';
import {onError, onSuccess} from '../../../config/api/http-mthd';
import {loanProviderSchema} from '../../../config/schema/loan.schema';
import {AppStateContext} from '../../../config/utils/context/app_state';

export default () => {
  const navigation = useNavigation();
  const [industry, setIndustry] = useState<any>();
  const [employmentType, setEmploymentStatus] = useState<any>();
  const [stateOfResident, setStateOfResidence] = useState<any>();
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const {contextValue, updateContext} = useContext(AppStateContext);
  const {mutate, data, reset, isLoading, isError, error} = useLoanProvider();

  const doSubmit = async (values: any) => {
    Keyboard.dismiss();
    setErrorMessage(null);
    const user = contextValue.user;
    const vStatus = contextValue.vStatus;

    mutate({
      industry,
      employmentType,
      stateOfResident,
      gender: user.gender,
      bvn: vStatus.bvnNumber,
      jobTitle: values.jobTitle,
      businessName: values.businessName,
      employerName: values.employerName,
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
    navigation.reset({
      index: 0,
      routes: [{name: 'DashboardTab'}],
      // routes: [{name: 'DashboardTab', screen: 'Provider'}], //did not work
    });
  }

  const loadNigeriaStates = () => {
    if (nigeriaStates == null) {
      return <Select.Item label="Loading..." value="key0" />;
    }
    return nigeriaStates.map((state: any) => {
      return (
        <Select.Item
          label={state.label}
          value={state.value}
          key={state.value}
        />
      );
    });
  };

  const loadIndustries = () => {
    if (allIndustries == null) {
      return <Select.Item label="Loading..." value="key0" />;
    }
    return allIndustries.map(item => {
      return (
        <Select.Item label={item.label} value={item.label} key={item.label} />
      );
    });
  };

  return (
    <AppContainer
      scrollAble={true}
      headerTxt="Become Loan Provider"
      subHeaderTxt="Create loan investment portfolio and give loans to our customers">
      <Formik
        validationSchema={loanProviderSchema}
        initialValues={{
          businessName: '',
          employerName: '',
          jobTitle: '',
        }}
        onSubmit={values => doSubmit(values)}>
        {({handleChange, handleSubmit, isValid, errors, values}) => (
          <VStack space="4">
            <PickerBar
              placeholder="Select"
              label="Professional Status"
              selectedItem={employmentType}
              onValueChange={itemValue => setEmploymentStatus(itemValue)}
              pickerData={[
                <Select.Item
                  label="Work with the Government"
                  value="civil-servant"
                  key="civil-servant"
                />,
                <Select.Item
                  label="Work in the Private Sector"
                  value="private-sector"
                  key="private-sector"
                />,
                <Select.Item
                  label="Runs Personal Business"
                  value="self-employed"
                  key="self-employed"
                />,
                <Select.Item
                  label="I am a Student"
                  value="student"
                  key="student"
                />,
                <Select.Item
                  label="I have no Job"
                  value="unemployed"
                  key="unemployed"
                />,
                <Select.Item label="Retired" value="retired" key="retired" />,
              ]}
            />
            <InputBar
              name="jobTitle"
              label="Job Title"
              value={values.jobTitle}
              error={errors?.jobTitle}
              placeholder="What is your job title?"
              onChangeText={handleChange('jobTitle')}
            />
            <PickerBar
              placeholder="Select"
              label="Industry where you work"
              pickerData={loadIndustries()}
              selectedItem={industry}
              onValueChange={itemValue => setIndustry(itemValue)}
            />
            <InputBar
              name="employerName"
              label="Employer Name"
              value={values.employerName}
              error={errors?.employerName}
              placeholder="Enter company you work for"
              onChangeText={handleChange('employerName')}
            />
            <InputBar
              name="businessName"
              label="Business name"
              value={values.businessName}
              error={errors?.businessName}
              placeholder="Prefer Business Name on Groupay"
              onChangeText={handleChange('businessName')}
            />
            <PickerBar
              placeholder="Select state"
              label="State of Residence"
              selectedItem={stateOfResident}
              onValueChange={itemValue => setStateOfResidence(itemValue)}
              pickerData={loadNigeriaStates()}
            />

            <ErrorText message={errorMessage} />

            <ButtonDynamic
              btnTxt="Next"
              btnType="primary"
              onPress={handleSubmit}
              loading={isLoading}
              fieldStatus={
                values.businessName &&
                values.employerName &&
                values.jobTitle &&
                isValid &&
                industry &&
                stateOfResident &&
                employmentType
                  ? true
                  : false
              }
            />
          </VStack>
        )}
      </Formik>
    </AppContainer>
  );
};
