import {Formik} from 'formik';
import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {forgotPasswordSchema} from '../../../config/schema/user.schema';
import InputBar from '../../../components/InputBar';
import {useNavigation} from '@react-navigation/core';
import ErrorText from '../../../components/ErrorText';
import Button from '../../../components/DynamicButton';
import Toasts from '../../../config/services/toast/Toast';
import AppContainer from '../../../components/AppContainer';
import ForgetPass from '../../../assets/auth/forgot-password';
import {useForgotPassword} from '../../../config/hooks/useUser';
import {onError, onSuccess} from '../../../config/api/http-mthd';

const ForgetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const {mutate, data, reset, isLoading, isError, error} = useForgotPassword();

  const doSubmit = async (values: any) => {
    Keyboard.dismiss();
    setEmail(values.email);
    setErrorMessage(null);
    mutate({email: values.email});
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
    navigation.navigate('AuthStack', {
      screen: 'ResetPassword',
      params: {email},
    });
  }

  return (
    <AppContainer
      scrollAble={true}
      checkSession={false}
      headerTxt="Forgot Password"
      subHeaderTxt="Enter your email address here and OTP will be sent  to
      your email address">
      <ForgetPass />

      <Formik
        validationSchema={forgotPasswordSchema}
        initialValues={{email: ''}}
        onSubmit={values => doSubmit(values)}>
        {({handleChange, handleSubmit, isValid, errors, values}) => (
          <>
            <InputBar
              name="email"
              label="Email address"
              value={values.email}
              error={errors?.email}
              placeholder="Enter email"
              onChangeText={handleChange('email')}
            />
            <ErrorText message={errorMessage} />

            <Button
              btnType="primary"
              btnTxt="Send OTP"
              loading={isLoading}
              onPress={handleSubmit}
              fieldStatus={values.email && isValid ? true : false}
            />
          </>
        )}
      </Formik>
    </AppContainer>
  );
};
export default ForgetPassword;
