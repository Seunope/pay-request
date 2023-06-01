import {Formik} from 'formik';
import React, {useState} from 'react';
import {Center, VStack} from 'native-base';
import colors from '../../../config/utils/colors';
import {useRoute} from '@react-navigation/native';
import {StyleSheet, Keyboard} from 'react-native';
import InputBar from '../../../components/InputBar';
import {useNavigation} from '@react-navigation/core';
import ErrorText from '../../../components/ErrorText';
import Button from '../../../components/DynamicButton';
import {forgotPasswordResetSchema} from '../../../config/schema/user.schema';
import Toasts from '../../../config/services/toast/Toast';
import RestPass from '../../../assets/auth/reset-password';
import AppContainer from '../../../components/AppContainer';
import {onError, onSuccess} from '../../../config/api/http-mthd';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useForgotPasswordReset} from '../../../config/hooks/useUser';

const ResetPassword = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [otp, setOtp] = useState<number>();
  const [isFilled, setIsFilled] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const {mutate, data, reset, isLoading, isError, error} =
    useForgotPasswordReset();

  const doSubmit = async (values: any) => {
    Keyboard.dismiss();
    setErrorMessage(null);
    mutate({password: values.password, otp, email: route.params.email});
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
      routes: [{name: 'AuthStack'}],
    });
  }

  return (
    <AppContainer
      scrollAble={true}
      checkSession={false}
      headerTxt="Change Password"
      subHeaderTxt="We have sent a mail. Check your Email for the OTP">
      <Center>
        <RestPass />
      </Center>
      <Formik
        validationSchema={forgotPasswordResetSchema}
        initialValues={{password: ''}}
        onSubmit={values => doSubmit(values)}>
        {({handleChange, handleSubmit, isValid, errors, values}) => (
          <VStack space="2">
            <SmoothPinCodeInput
              password={true}
              mask="﹡"
              codeLength={6}
              cellStyle={styles.oTCode}
              cellStyleFocused={{
                borderColor: colors.blue[100],
              }}
              value={otp}
              onBackspace={() => setIsFilled(false)}
              onTextChange={(text: any) => setOtp(text)}
              onFulfill={() => (setIsFilled(true), Keyboard.dismiss())}
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

            <ErrorText message={errorMessage} />

            <Button
              btnTxt="Submit"
              btnType="primary"
              loading={isLoading}
              onPress={handleSubmit}
              fieldStatus={otp && values.password && isValid ? true : false}
            />
          </VStack>
        )}
      </Formik>

      {/* {!loading ? (
        <Text
          fontSize="xs"
          color="green.90"
          mt="3"
          fontWeight={300}
          textAlign="center">
          Resend OTP
        </Text>
      ) : null} */}
    </AppContainer>
  );
};
export default ResetPassword;

const styles = StyleSheet.create({
  oTCode: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray[90],
  },
});
