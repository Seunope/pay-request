import {Text} from 'native-base';
import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import InputBar from '../../../../components/InputBar';
import {StackActions} from '@react-navigation/native';
import ErrorText from '../../../../components/ErrorText';
import Button from '../../../../components/DynamicButton';
import Toasts from '../../../../config/services/toast/Toast';
import {useVerifyBVN} from '../../../../config/hooks/useUser';
import AppContainer from '../../../../components/AppContainer';
import {onError, onSuccess} from '../../../../config/api/http-mthd';

const BVNVerification = () => {
  const navigation = useNavigation();
  const [bvn, setBVN] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [canEditBVNDetails, setCanEditBVNDetails] = useState<false>();
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const {mutate, data, reset, isLoading, isError, error} = useVerifyBVN();

  const doSubmit = async () => {
    Keyboard.dismiss();
    setErrorMessage(null);
    if (bvn?.length < 11) {
      let msg = 'BVN must be 11 characters';
      setErrorMessage(msg);
      Toasts.error(msg);
      return;
    }

    mutate({
      bvn,
    });
  };

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);
    setErrorMessage(msg);
    //console.log('data', error);

    reset(); //prevent api call on state change
  }

  if (data) {
    const res = onSuccess(data);
    Toasts.success(res.message);
    //console.log('data', res);
    reset(); //prevent api call on state change
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  }

  return (
    <AppContainer
      scrollAble={true}
      checkSession={false}
      headerTxt="Verify BVN"
      subHeaderTxt="Please provide your BVN for verification">
      <InputBar
        maxLength={11}
        label="BVN"
        value={bvn}
        placeholder="Enter BVN"
        keyboardType="number-pad"
        onChangeText={text => setBVN(text)}
      />
      {/* Trigger by admin */}
      {canEditBVNDetails ? (
        <>
          <InputBar
            value={lastName}
            placeholder="Valid Last name"
            label="Valid Last name"
            onChangeText={text => setLastName(text)}
          />

          <InputBar
            value={firstName}
            placeholder="Valid First name"
            label="Valid First name"
            onChangeText={text => setFirstName(text)}
          />
        </>
      ) : null}

      <ErrorText message={errorMessage} />

      <Text mt="3" fontSize="xs" color="blue.100" textAlign="center">
        Can't remember BVN? Dial *565*0# to retrieve it
      </Text>
      <Button
        btnType="primary"
        btnTxt="Verify"
        onPress={doSubmit}
        loading={isLoading}
        fieldStatus={bvn ? true : false}
      />
    </AppContainer>
  );
};
export default BVNVerification;
