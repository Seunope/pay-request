import colors from '../../config/utils/colors';
import {useRoute} from '@react-navigation/native';
import {StyleSheet, Keyboard} from 'react-native';
import {AuthStackParams} from '../../route/auth';
import InputBar from '../../components/InputBar';
import {useNavigation} from '@react-navigation/core';
import {StackScreenProps} from '@react-navigation/stack';
import RestPass from '../../assets/auth/reset-password';
import React, {useState, useRef, useContext} from 'react';
import AppContainer from '../../components/AppContainer';
import DynamicButton from '../../components/DynamicButton';
import {Text, Center, Button, AlertDialog} from 'native-base';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {AppStateContext} from '../../config/utils/context/app_state';

type Props = StackScreenProps<AuthStackParams, 'SignUp'>;

const OTPVerification: React.FC<Props> = props => {
  const route = useRoute<any>();
  const [otp, setOtp] = useState();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const {contextValue, updateContext} = useContext(AppStateContext);
  const [errorMessage, setErrorMessage] = useState<string | null>('');

  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  const doSubmit = async () => {
    return;
  };

  const getNewOTP = async () => {
    return;
  };

  return (
    <AppContainer
      scrollAble={true}
      checkSession={false}
      headerTxt="Change PIN"
      subHeaderTxt="Create a new Personal Identification Number (PIN)">
      <Center>
        <RestPass />
      </Center>
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

      <InputBar
        label="New Pin"
        password={true}
        value={password}
        placeholder="Enter pin"
        onChangeText={text => setPassword(text)}
      />

      <DynamicButton
        marginTop="0"
        btnType="primary"
        // onPress={doSubmit}
        onPress={() => navigation.navigate('DashboardStack')}
        loading={loading}
        btnTxt="Save Pin"
        fieldStatus={password ? true : false}
      />

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content>
          {/* <AlertDialog.Header>Access Required</AlertDialog.Header> */}
          <AlertDialog.Body>
            <Text mb="4">Let confirm it is really you</Text>
            <InputBar
              label="Password"
              password={true}
              value={password}
              placeholder="Enter pin"
              onChangeText={text => setPassword(text)}
            />
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <DynamicButton
              marginTop="0"
              btnType="primary"
              // onPress={doSubmit}
              onPress={() => setIsOpen(false)}
              loading={loading}
              btnTxt="Submit"
              fieldStatus={password ? true : false}
            />
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
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
