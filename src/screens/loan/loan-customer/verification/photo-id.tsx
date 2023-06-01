import {Select} from 'native-base';
import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackActions} from '@react-navigation/native';
import ImageBar from '../../../../components/ImageBar';
import InputBar from '../../../../components/InputBar';
import ErrorText from '../../../../components/ErrorText';
import Button from '../../../../components/DynamicButton';
import PickerBar from '../../../../components/PickerBar';
import Toasts from '../../../../config/services/toast/Toast';
import AppContainer from '../../../../components/AppContainer';
import {useAddNationalID} from '../../../../config/hooks/useUser';
import {onError, onSuccess} from '../../../../config/api/http-mthd';

const PhotoID = () => {
  const navigation = useNavigation();
  const [idType, setIdType] = useState<any>();
  const [newImage, setNewImage] = useState<string>();
  const [serialNo, setSerialNo] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const {mutate, data, reset, isLoading, isError, error} = useAddNationalID();

  const doSubmit = async () => {
    let msg;
    Keyboard.dismiss();
    setErrorMessage(null);

    if (serialNo.length < 7) {
      msg = 'This number is not correct';
      Toasts.error(msg);
      setErrorMessage(msg);
    }

    mutate({
      serialNo,
      type: idType,
      imageBase64: newImage,
      verificationCall: true,
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

  const capturedImage = (imagePath: any) => {
    setNewImage(imagePath);
  };

  return (
    <AppContainer
      scrollAble={true}
      checkSession={false}
      headerTxt="Photo of National ID"
      subHeaderTxt="Please provide a valid ID to gain access to more features">
      <PickerBar
        placeholder="Select"
        label="ID Type"
        selectedItem={idType}
        onValueChange={itemValue => setIdType(itemValue)}
        pickerData={[
          <Select.Item
            label="International Passport"
            value="International Passport"
            key="International Passport"
          />,
          <Select.Item
            label="National Identification Number(NIN)"
            value="NIN"
            key="National Identification Number"
          />,
          <Select.Item
            label="Driver's License"
            value="Driver's License"
            key="Driver's License"
          />,
          <Select.Item
            label="Voter's card"
            value="Voter's card"
            key="Voter's card"
          />,
        ]}
      />

      <InputBar
        value={serialNo}
        label="ID number"
        keyboardType="number-pad"
        placeholder="Enter ID number"
        onChangeText={text => setSerialNo(text)}
      />

      <ImageBar
        openFrontCamera={false}
        capturedImage={capturedImage}
        actionText="Take a picture of document"
      />

      <ErrorText message={errorMessage} />

      <Button
        btnType="primary"
        onPress={doSubmit}
        loading={isLoading}
        btnTxt="Submit"
        fieldStatus={serialNo && idType && newImage ? true : false}
      />
    </AppContainer>
  );
};
export default PhotoID;
