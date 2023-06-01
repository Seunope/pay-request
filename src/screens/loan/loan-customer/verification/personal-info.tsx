import {Formik} from 'formik';
import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {Select, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import {StackActions} from '@react-navigation/native';
import InputBar from '../../../../components/InputBar';
import DaterBar from '../../../../components/DateBar';
import ErrorText from '../../../../components/ErrorText';
import PickerBar from '../../../../components/PickerBar';
import Button from '../../../../components/DynamicButton';
import {StackNavigationProp} from '@react-navigation/stack';
import Toasts from '../../../../config/services/toast/Toast';
import countries from '../../../../config/data/all_countries';
import nigeriaStates from '../../../../config/data/all_states';
import AppContainer from '../../../../components/AppContainer';
import {usePersonalInfo} from '../../../../config/hooks/useUser';
import {onError, onSuccess} from '../../../../config/api/http-mthd';
import {personalInfoSchema} from '../../../../config/schema/user.schema';

export default () => {
  const [dob, setDob] = useState<string>('');
  const [maritalStatus, setMaritalStatus] = useState<string>('');
  const [nationality, setNationality] = useState<any>('Nigeria');
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const navigation = useNavigation<StackNavigationProp<{route: {}}>>();
  const [stateOfResidence, setStateOfResidence] = useState<any>('Nigeria');
  const {mutate, data, reset, isLoading, isError, error} = usePersonalInfo();

  const doSubmit = async (values: any) => {
    Keyboard.dismiss();
    setErrorMessage(null);
    mutate({
      dob,
      nationality,
      maritalStatus,
      state: stateOfResidence,
      otherNames: values.otherNames,
      homeAddress: values.homeAddress,
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
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
    // navigation.replace('LoanStack', {
    //   screen: 'VerifyPhoneNumber',
    // });
  }

  const setSelectedDate = (value: string) => {
    setDob(value);
  };

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

  const loadCountries = () => {
    if (countries == null) {
      return <Select.Item label="Loading..." value="key0" />;
    }
    return countries.map((country: any) => {
      return (
        <Select.Item
          label={country.name}
          value={country.name}
          key={country.code}
        />
      );
    });
  };

  return (
    <AppContainer
      scrollAble={true}
      headerTxt="Personal Data"
      subHeaderTxt="Kindly provide more detail for your bio data">
      <Formik
        validationSchema={personalInfoSchema}
        initialValues={{
          otherNames: '',
          homeAddress: '',
        }}
        onSubmit={values => doSubmit(values)}>
        {({handleChange, handleSubmit, isValid, errors, values}) => (
          <VStack space="3">
            <InputBar
              name="otherNames"
              label="Other name"
              error={errors?.otherNames}
              value={values.otherNames}
              placeholder="Other name"
              onChangeText={handleChange('otherNames')}
            />

            <DaterBar
              placeholder="dd/mm/yy"
              label="Date of Birth"
              selectedDate={setSelectedDate}
            />

            <PickerBar
              placeholder="Select"
              label="Marital Status"
              selectedItem={maritalStatus}
              onValueChange={itemValue => setMaritalStatus(itemValue)}
              pickerData={[
                <Select.Item label="Married" value="Married" key="Married" />,
                <Select.Item label="Single" value="Single" key="Single" />,
                <Select.Item label="Divorce" value="Divorce" key="Divorce" />,
                <Select.Item label="Widow" value="Widow" key="Widow" />,
              ]}
            />

            <InputBar
              label="Address"
              name="homeAddress"
              value={values.homeAddress}
              placeholder="Enter Address"
              error={errors?.homeAddress}
              onChangeText={handleChange('homeAddress')}
            />

            <PickerBar
              placeholder="Select state"
              label="State of Residence"
              selectedItem={stateOfResidence}
              onValueChange={itemValue => setStateOfResidence(itemValue)}
              pickerData={loadNigeriaStates()}
            />

            <PickerBar
              placeholder="Select state"
              label="Nationality"
              selectedItem={nationality}
              onValueChange={itemValue => setNationality(itemValue)}
              pickerData={loadCountries()}
            />

            <ErrorText message={errorMessage} />

            <Button
              btnTxt="Submit"
              btnType="primary"
              onPress={handleSubmit}
              loading={isLoading}
              fieldStatus={
                dob &&
                nationality &&
                maritalStatus &&
                stateOfResidence &&
                values.otherNames &&
                values.homeAddress &&
                isValid
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
