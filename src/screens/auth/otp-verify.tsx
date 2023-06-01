import colors from '../../config/utils/colors';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {StyleSheet, Keyboard} from 'react-native';
import ErrorText from '../../components/ErrorText';
import Button from '../../components/DynamicButton';
import {useNavigation} from '@react-navigation/core';
import Toasts from '../../config/services/toast/Toast';
import {Text, Center, HStack, Spinner} from 'native-base';
import VerifyPhone from '../../assets/auth/phone-verify';
import AppContainer from '../../components/AppContainer';
import AppStorage from '../../config/services/AppStorage';
import {onError, onSuccess} from '../../config/api/http-mthd';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useVerifyEmail, useGetEmailOTP} from '../../config/hooks/useUser';

const OTPVerification = () => {
  const route = useRoute<any>();
  const [otp, setOtp] = useState();
  const navigation = useNavigation<any>();
  const [minutes, setMinutes] = useState<number>(1);
  const [seconds, setSeconds] = useState<number>(45);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const {mutate, data, isSuccess, reset, isLoading, isError, error} =
    useVerifyEmail();

  const {
    remove,
    refetch,
    error: e,
    isFetching,
    isError: isE,
    isSuccess: isS,
  } = useGetEmailOTP(route.params?.email);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);

  const resendOTP = () => {
    refetch();
  };

  const doSubmit = async () => {
    setErrorMessage(null);
    mutate({otp, email: route.params?.email});
  };

  if (isS) {
    remove();
    setMinutes(1);
    setSeconds(30);
    Toasts.success('Hurry! Check email for OTP');
  }

  if (isE) {
    const msg = onError(e);
    Toasts.error(msg);
    remove();
  }

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);
    setErrorMessage(msg);
    reset(); //prevent api call on state change
  }

  if (isSuccess) {
    const res = onSuccess(data);
    AppStorage.saveData('user', res.data.customer);
    AppStorage.saveToken(res.data.token.accessToken, 1440); //1 day
    AppStorage.saveData('refreshToken', res.data.token.refreshToken);
    Toasts.success('Hurry! 🌟 Welcome to Groupay community');
    navigation.reset({
      index: 0,
      routes: [{name: 'DashboardTab'}],
    });
  }

  return (
    <AppContainer
      scrollAble={true}
      checkSession={false}
      headerTxt="OTP Verification"
      subHeaderTxt={`One time password was sent to ${route.params?.email}. Check "inbox" and "spam" mail`}>
      <VerifyPhone />
      <Center mt="6">
        <SmoothPinCodeInput
          password={true}
          mask="﹡"
          codeLength={6}
          cellStyle={styles.oTCode}
          cellStyleFocused={{
            borderColor: colors.blue[100],
          }}
          value={otp}
          onTextChange={(text: any) => setOtp(text)}
          // onFulfill={() => this.doSubmit}
          onFulfill={() => (setIsFilled(true), Keyboard.dismiss())}
          onBackspace={() => setIsFilled(false)}
        />
      </Center>

      <ErrorText message={errorMessage} />

      <Button
        marginTop="0"
        btnType="primary"
        onPress={doSubmit}
        loading={isLoading}
        btnTxt="Verify Email Address"
        fieldStatus={otp ? true : false}
      />

      <HStack justifyContent="space-between" space="3">
        {seconds > 0 || minutes > 0 ? (
          <>
            <Text fontSize="xs" color="green.90" mt="3">
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </Text>
            <Text fontSize="xs" mt="3" color="gray.90">
              Resend OTP
            </Text>
          </>
        ) : (
          <>
            <Text fontSize="xs" color="red.100" mt="3">
              Didn't receive OTP?
            </Text>
            {isFetching ? (
              <Spinner size="small" />
            ) : (
              <Text
                fontSize="xs"
                mt="3"
                color="blue.90"
                onPress={() => resendOTP()}>
                Resend OTP
              </Text>
            )}
          </>
        )}
      </HStack>
    </AppContainer>
  );
};
export default OTPVerification;

const styles = StyleSheet.create({
  oTCode: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray[90],
  },
});
