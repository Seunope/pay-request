import {Formik} from 'formik';
import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import InputBar from '../../components/InputBar';
import ErrorText from '../../components/ErrorText';
import PickerBar from '../../components/PickerBar';
import Button from '../../components/DynamicButton';
import {useNavigation} from '@react-navigation/core';
import Toasts from '../../config/services/toast/Toast';
import {useCreateUser} from '../../config/hooks/useUser';
import AppContainer from '../../components/AppContainer';
import {signUpSchema} from '../../config/schema/user.schema';
import {StackNavigationProp} from '@react-navigation/stack';
import {onError, onSuccess} from '../../config/api/http-mthd';
import {HStack, Text, Select, Checkbox, VStack, Pressable} from 'native-base';

export default () => {
  const [email, setEmail] = useState<string>();
  const [gender, setGender] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const navigation = useNavigation<StackNavigationProp<{route: {}}>>();
  const {mutate, data, reset, isLoading, isError, error} = useCreateUser();

  const doSubmit = async (values: any) => {
    Keyboard.dismiss();
    setEmail(values.email);
    setErrorMessage(null);
    mutate({
      gender,
      email: values.email,
      lastName: values.lastName,
      password: values.password,
      firstName: values.firstName,
      phoneNumber: values.phoneNumber,
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
    navigation.replace('AuthStack', {screen: 'OtpVerify', params: {email}});
  }

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <AppContainer
      scrollAble={true}
      checkSession={false}
      headerTxt="Create an account"
      subHeaderTxt="Start Ajo/thrift or build your loan portfolio">
      <Formik
        validationSchema={signUpSchema}
        initialValues={{
          email: '',
          lastName: '',
          password: '',
          firstName: '',
          phoneNumber: '',
        }}
        onSubmit={values => doSubmit(values)}>
        {({handleChange, handleSubmit, isValid, errors, values}) => (
          <VStack space="2">
            <InputBar
              name="lastName"
              value={values.lastName}
              label="Valid Last name"
              error={errors?.lastName}
              placeholder="Valid Last name"
              onChangeText={handleChange('lastName')}
            />

            <InputBar
              name="firstName"
              value={values.firstName}
              label="Valid First name"
              error={errors?.firstName}
              placeholder="Valid First name"
              onChangeText={handleChange('firstName')}
            />

            <PickerBar
              placeholder="Select"
              label="Gender"
              selectedItem={gender}
              onValueChange={itemValue => setGender(itemValue)}
              pickerData={[
                <Select.Item label="Male" value="Male" key="M" />,
                <Select.Item label="Female" value="Female" key="F" />,
                <Select.Item
                  label="Prefer not to Say"
                  value="PreferToNotSay"
                  key="crazy people"
                />,
              ]}
            />

            <InputBar
              name="email"
              value={values.email}
              label="Email address"
              error={errors?.firstName}
              placeholder="Enter email address"
              onChangeText={handleChange('email')}
            />

            <InputBar
              maxLength={11}
              name="phoneNumber"
              label="Phone number"
              value={values.phoneNumber}
              error={errors?.phoneNumber}
              keyboardType={'number-pad'}
              placeholder="Enter phone number"
              onChangeText={handleChange('phoneNumber')}
            />

            <InputBar
              name="password"
              label="Password"
              password={true}
              value={values.password}
              error={errors?.password}
              placeholder="Enter password"
              onChangeText={handleChange('password')}
            />

            <VStack width="95%">
              <Checkbox value="1" onChange={() => toggleCheckBox()}>
                <Text color="gray.100" pr="1" fontSize="xs">
                  By creating an account implies you agree to our{' '}
                  <Text color="blue.70" textDecorationLine="underline">
                    Terms of Use
                  </Text>
                </Text>
              </Checkbox>
            </VStack>

            <ErrorText message={errorMessage} />

            <Button
              btnTxt="Submit"
              btnType="primary"
              onPress={handleSubmit}
              loading={isLoading}
              fieldStatus={
                isChecked &&
                values.email &&
                values.lastName &&
                values.password &&
                values.firstName &&
                values.phoneNumber &&
                isValid
                  ? true
                  : false
              }
            />
          </VStack>
        )}
      </Formik>
      <Pressable onPress={() => navigation.goBack()}>
        <HStack justifyContent="center" space="2">
          <Text>Already have an account?</Text>
          <Text color="green.90">Login!</Text>
        </HStack>
      </Pressable>
    </AppContainer>
  );
};
