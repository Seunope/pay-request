import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {HStack, Pressable, Text} from 'native-base';
import InputBar from '../../components/InputBar';
import Button from '../../components/DynamicButton';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../../components/AppContainer';

export default () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const doSubmit = async () => {
    setLoading(true);
    Keyboard.dismiss();
    return;
  };

  return (
    <AppContainer
      scrollAble={false}
      headerTxt="Change Password"
      subHeaderTxt="Is your password compromised? Change it!">
      <InputBar
        label="Old Password"
        password={true}
        value={password}
        placeholder="Enter old password"
        onChangeText={text => setPassword(text)}
      />

      <InputBar
        label="New Password"
        password={true}
        value={password}
        placeholder="Enter New Password"
        onChangeText={text => setPassword(text)}
      />

      <Button
        btnTxt="Submit"
        marginTop="20"
        btnType="primary"
        // onPress={doSubmit}
        loading={loading}
        onPress={() => navigation.navigate('DashboardStack')}
        fieldStatus={password && phoneNumber ? true : false}
      />
    </AppContainer>
  );
};
