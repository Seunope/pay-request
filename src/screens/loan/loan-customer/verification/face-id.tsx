import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackActions} from '@react-navigation/native';
import ImageBar from '../../../../components/ImageBar';
import ErrorText from '../../../../components/ErrorText';
import Button from '../../../../components/DynamicButton';
import Toasts from '../../../../config/services/toast/Toast';
import AppContainer from '../../../../components/AppContainer';
import AppStorage from '../../../../config/services/AppStorage';
import {onError, onSuccess} from '../../../../config/api/http-mthd';
import {useUpdateProfileImage} from '../../../../config/hooks/useUser';

const FaceId = () => {
  const navigation = useNavigation();
  const [newImage, setNewImage] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const {mutate, data, reset, isLoading, isError, error} =
    useUpdateProfileImage();

  const doSubmit = async () => {
    Keyboard.dismiss();
    setErrorMessage(null);

    mutate({
      imageBase64: newImage,
    });
  };

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);
    setErrorMessage(msg);
    console.log('data', error);

    reset(); //prevent api call on state change
  }

  if (data) {
    const res = onSuccess(data);
    Toasts.success(res.message);
    console.log('data', res);
    AppStorage.saveData('user', res.data.customer);
    reset(); //prevent api call on state change
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  }

  const capturedImage = (imagePath: any) => {
    setNewImage(imagePath);
  };

  return (
    <AppContainer
      scrollAble={true}
      checkSession={false}
      headerTxt="FaceID"
      subHeaderTxt="Position your face in the camera frame. Then move your head in a square to show all angles of your face please.">
      <ImageBar actionText="Take a selfie" capturedImage={capturedImage} />

      <ErrorText message={errorMessage} />

      <Button
        btnType="primary"
        onPress={doSubmit}
        loading={isLoading}
        btnTxt="Save Face ID"
        fieldStatus={newImage ? true : false}
      />
    </AppContainer>
  );
};
export default FaceId;
