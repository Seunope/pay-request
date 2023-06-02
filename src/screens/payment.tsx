import React, {useState} from 'react';
import {
  Box,
  HStack,
  FlatList,
  VStack,
  Pressable,
  Input,
  Divider,
  Stack,
  Avatar,
  Text,
  // Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../components/AppContainer';
import Button from '../components/Button';
import InputBar from '../components/InputBar';

export default () => {
  const navigation = useNavigation<any>();
  const [lastName, setLastName] = useState<string>();

  return (
    <AppContainer
      scrollAble={true}
      showBack={true}
      backGroundIsWhite={true}
      headerTxt="Add Payment Method">
      <Text>Add a debit Card</Text>

      <InputBar
        name="lastName"
        value={lastName}
        label="Card Number"
        // error={errors?.lastName}
        onChangeText={text => setLastName(text)}
      />

      <HStack justifyContent="space-between">
        <Input variant="filled" placeholder="Filled" />

        <Input variant="filled" placeholder="Filled" />
      </HStack>

      <InputBar
        name="lastName"
        value={lastName}
        label="Cardholder Name"
        // error={errors?.lastName}
        placeholder="Valid Last name"
        onChangeText={text => setLastName(text)}
      />

      <InputBar
        name="lastName"
        value={lastName}
        label="Billing Address"
        // error={errors?.lastName}
        placeholder="Enter address"
        onChangeText={text => setLastName(text)}
      />
    </AppContainer>
  );
};
