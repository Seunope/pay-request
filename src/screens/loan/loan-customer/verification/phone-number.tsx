import {
  useGetPhoneOTP,
  useChangePhoneNUmber,
  useVerifyPhoneNUmber,
} from '../../../../config/hooks/useUser';
import {StyleSheet, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import colors from '../../../../config/utils/colors';
import {StackActions} from '@react-navigation/native';
import InputBar from '../../../../components/InputBar';
import ErrorText from '../../../../components/ErrorText';
import Button from '../../../../components/DynamicButton';
import React, {useState, useContext, useEffect} from 'react';
import ForgetPass from '../../../../assets/auth/phone-verify';
import Toasts from '../../../../config/services/toast/Toast';
import {useDisclose, Actionsheet, Box, Text} from 'native-base';
import AppStorage from '../../../../config/services/AppStorage';
import AppContainer from '../../../../components/AppContainer';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {onError, onSuccess} from '../../../../config/api/http-mthd';
import {AppStateContext} from '../../../../config/utils/context/app_state';

const PhoneVerification = () => {
  const [otp, setOtp] = useState();
  const navigation = useNavigation<any>();
  const [isFilled, setIsFilled] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclose();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const {contextValue, updateContext} = useContext(AppStateContext);
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState<string>();
  const {
    data: dataVerify,
    reset: resetVerify,
    error: errorVerify,
    mutate: mutateVerify,
    isError: isErrorVerify,
    isSuccess: isSuccessVerify,
    isLoading: isLoadingVerify,
  } = useVerifyPhoneNUmber();
  const {
    remove,
    refetch,
    isFetching,
    error: errOTP,
    isError: isErrOTP,
    isSuccess: isSuccessOTP,
  } = useGetPhoneOTP(currentPhoneNumber);
  const {mutate, data, reset, isLoading, isSuccess, isError, error} =
    useChangePhoneNUmber();

  useEffect(() => {
    initialize();
  }, []);

  const initialize = () => {
    const nub = '0' + contextValue.user.phoneNumber.substring(3);
    console.log('nub', nub);
    setPhoneNumber(nub);
    setCurrentPhoneNumber(nub);
  };

  const doSubmit = async () => {
    Keyboard.dismiss();
    setErrorMessage(null);

    if (currentPhoneNumber !== phoneNumber) {
      mutate({
        currentPhoneNumber,
        newPhoneNumber: phoneNumber,
      });
    } else {
      refetch();
    }
  };

  if (isErrOTP) {
    const msg = onError(errOTP);
    Toasts.error(msg);
    setErrorMessage(msg);
    reset(); //prevent api call on state change
  }

  if (isSuccessOTP) {
    remove();
    onOpen();
  }

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);
    setErrorMessage(msg);
    reset(); //prevent api call on state change
  }

  if (isSuccess) {
    const res = onSuccess(data);
    Toasts.success(res.message);
    setCurrentPhoneNumber(phoneNumber);
    reset(); //prevent api call on state change
    refetch(); //send otp
  }

  if (isErrorVerify) {
    const msg = onError(errorVerify);
    // console.log('msg', msg);
    Toasts.error(msg);
    setErrorMessage(msg);
    resetVerify(); //prevent api call on state change
  }

  if (isSuccessVerify) {
    const res = onSuccess(dataVerify);
    AppStorage.saveData('user', res.data.customer);
    AppStorage.saveToken(res.data.token.accessToken, 1440); //1 day
    AppStorage.saveData('refreshToken', res.data.token.refreshToken);
    Toasts.success('Phone number verified successfully');
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
    // navigation.reset({
    //   index: 0,
    //   routes: [{name: 'DashboardTab'}],
    // });
  }

  const doSubmitVerify = async () => {
    setErrorMessage(null);
    mutateVerify({otp, phoneNumber});
  };

  return (
    <AppContainer
      scrollAble={true}
      checkSession={false}
      headerTxt="Verify Phone Number"
      subHeaderTxt="Please verify your phone number to gain access to more features">
      <ForgetPass />

      <InputBar
        maxLength={11}
        placeholder="Enter number"
        label="Phone number"
        value={phoneNumber}
        keyboardType="number-pad"
        onChangeText={text => setPhoneNumber(text)}
      />
      <ErrorText message={errorMessage} />

      <Button
        marginTop="0"
        btnType="primary"
        onPress={doSubmit}
        loading={isLoading || isFetching}
        btnTxt="Send OTP"
        fieldStatus={phoneNumber ? true : false}
      />

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={80} px={4} justifyContent="center">
            <Text fontSize="xs" py="4" textAlign="center">
              Enter OTP sent to your phone number
            </Text>
            <SmoothPinCodeInput
              password={true}
              mask="﹡"
              codeLength={6}
              cellStyle={styles.oTCode}
              cellStyleFocused={{
                borderColor: colors.blue[100],
              }}
              value={otp}
              onTextChange={text => setOtp(text)}
              // onFulfill={() => this.doSubmit}
              onFulfill={() => (setIsFilled(true), Keyboard.dismiss())}
              onBackspace={() => setIsFilled(false)}
            />
          </Box>
          <ErrorText message={errorMessage} />

          <Button
            btnType="primary"
            onPress={doSubmitVerify}
            loading={isLoadingVerify}
            btnTxt="Verify OTP"
            fieldStatus={otp ? true : false}
          />
          <Text fontSize="xs" py="4" textAlign="center">
            Try again or use different phone number if OTP do not arrive in 10
            minutes
          </Text>
          <Text pb="4" />
        </Actionsheet.Content>
      </Actionsheet>
    </AppContainer>
  );
};
export default PhoneVerification;

const styles = StyleSheet.create({
  oTCode: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray[90],
  },
});
