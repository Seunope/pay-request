import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import ImageBar from '../../../components/ImageBar';
import Button from '../../../components/DynamicButton';
import AppContainer from '../../../components/AppContainer';

const FaceId = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [newImage, setNewImage] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>('');

  const doSubmit = async () => {
    Keyboard.dismiss();
    return;
  };

  const capturedImage = (imagePath: any) => {
    setNewImage(imagePath);
  };

  return (
    <AppContainer
      scrollAble={true}
      headerTxt=""
      headerTxt="Become Loan Provider"
      subHeaderTxt="Create loan investment portfolio and give our loan to our customers">
      <ImageBar
        actionText="Upload image or company logo"
        capturedImage={capturedImage}
      />

      <Button
        btnType="primary"
        onPress={doSubmit}
        loading={loading}
        btnTxt="Save Selfie"
        fieldStatus={newImage ? true : false}
      />
    </AppContainer>
  );
};
export default FaceId;
