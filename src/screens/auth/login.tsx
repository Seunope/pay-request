import {Formik} from 'formik';
import {Keyboard} from 'react-native';
import {
  GetCredentials,
  IsBiometricSupported,
  AuthenticateFingerPrint,
  SaveUserDetails2KeyChain,
} from '../../config/services/Biometric';
import Toast from 'react-native-simple-toast';
import React, {useState, useEffect} from 'react';
import InputBar from '../../components/InputBar';
import ErrorText from '../../components/ErrorText';
import Button from '../../components/DynamicButton';
import {useNavigation} from '@react-navigation/core';
import Toasts from '../../config/services/toast/Toast';
import {useLoginUser} from '../../config/hooks/useUser';
import AppContainer from '../../components/AppContainer';
import AppStorage from '../../config/services/AppStorage';
import {loginSchema} from '../../config/schema/user.schema';
import {HStack, Pressable, Text, VStack} from 'native-base';
import {onError, onSuccess} from '../../config/api/http-mthd';
import FingerPrintIcon from '../../assets/auth/finger-print';

export default () => {
  const navigation = useNavigation<any>();
  const [userData, setUserData] = useState<any>();
  const [userPhone, setUserPhone] = useState<any>('');
  const [bioLogin, setBioLogin] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [isBiometricEnable, setIsBiometricEnable] = useState<boolean>(false);
  const {mutate, data, isSuccess, reset, isLoading, isError, error} =
    useLoginUser();

  useEffect(() => {
    fingerPrintStatus();
  }, []);

  const fingerPrintStatus = async () => {
    const user = (await AppStorage.getData('user')) as any;
    if (user) {
      setUserPhone('0' + user.phoneNumber.substring(3));
      const canUseFingerPrint = await AppStorage.getData('canUseFingerPrint');
      if (canUseFingerPrint === 'okay') {
        let res = await IsBiometricSupported();
        if (res) {
          setIsBiometricEnable(true);
        }
      }
    }
  };

  const doSubmit = async (values: any) => {
    Keyboard.dismiss();
    setErrorMessage(null);
    setUserData({password: values.password, phoneNumber: values.phoneNumber});
    mutate({password: values.password, phoneNumber: values.phoneNumber});
  };

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);
    setErrorMessage(msg);
    reset(); //prevent api call on state change
  }

  if (isSuccess) {
    userData
      ? SaveUserDetails2KeyChain(userData?.phoneNumber, userData?.password)
      : null;
    AppStorage.saveData('canUseFingerPrint', 'okay');
  }

  if (data) {
    const res = onSuccess(data);

    if (res.data.code) {
      Toast.show(res.message, Toast.LONG);
      navigation.replace('AuthStack', {
        screen: 'OtpVerify',
        params: {email: res.data?.customer?.email},
      });
      return;
    }
    AppStorage.saveData('user', res.data.customer);
    AppStorage.saveData('vStatus', res.data.vStatus);
    AppStorage.saveToken(res.data.token.accessToken, 1440); //  1 day :45 minutes
    AppStorage.saveData('refreshToken', res.data.token.refreshToken);

    Toast.show('Welcome on board', Toast.LONG);
    navigation.reset({
      index: 0,
      routes: [{name: 'DashboardTab'}],
    });
  }

  const biometricLogin = async () => {
    let isFingerPrintAuthenticated = await AuthenticateFingerPrint();

    if (isFingerPrintAuthenticated === true) {
      setBioLogin(true);
      let credentials = (await GetCredentials()) as any;
      if (credentials && credentials?.username) {
        setErrorMessage(null);
        mutate({
          password: credentials?.password,
          phoneNumber: credentials?.username,
        });
      } else {
        setBioLogin(false);
      }
    }
  };

  return (
    <AppContainer
      scrollAble={false}
      checkSession={false}
      headerTxt="Hey! There"
      subHeaderTxt="Login to your Groupay account">
      <Formik
        validationSchema={loginSchema}
        initialValues={{phoneNumber: '', password: ''}}
        onSubmit={values => doSubmit(values)}>
        {({handleChange, handleSubmit, isValid, errors, values}) => (
          <VStack space="4">
            <InputBar
              maxLength={11}
              name="phoneNumber"
              label="Phone number"
              error={errors?.phoneNumber}
              keyboardType="number-pad"
              placeholder="Enter number"
              value={values.phoneNumber || userPhone}
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

            <HStack justifyContent="space-between">
              {isBiometricEnable ? (
                <Pressable onPress={() => biometricLogin()}>
                  <FingerPrintIcon />
                </Pressable>
              ) : (
                <Text />
              )}
              <Text
                color="green.90"
                onPress={() =>
                  navigation.navigate('AuthStack', {screen: 'ForgotPassword'})
                }>
                Forgot Password?
              </Text>
            </HStack>
            <ErrorText message={errorMessage} />

            <Button
              btnTxt="Submit"
              marginTop="20"
              btnType="primary"
              onPress={handleSubmit}
              loading={isLoading}
              fieldStatus={
                (values.password && values.phoneNumber && isValid) || bioLogin
                  ? true
                  : false
              }
            />
          </VStack>
        )}
      </Formik>

      <Pressable
        onPress={() => navigation.navigate('AuthStack', {screen: 'SignUp'})}>
        <HStack justifyContent="center" space="2">
          <Text>Don't have account?</Text>
          <Text color="green.90">Create Now!</Text>
        </HStack>
      </Pressable>
    </AppContainer>
  );
};
