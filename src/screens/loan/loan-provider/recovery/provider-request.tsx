import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import InputBar from '../../../../components/InputBar';
import Button from '../../../../components/DynamicButton';
import BadLoan from '../../../../assets/dashboard/provider/bad';
import AppContainer from '../../../../components/AppContainer';
import {
  Avatar,
  Box,
  Divider,
  TextArea,
  HStack,
  Spacer,
  Text,
  VStack,
  Select,
} from 'native-base';
import PickerBar from '../../../../components/PickerBar';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>();
  const [userResponse, setUserResponse] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  //due day type should be cal automaticatly

  return (
    <AppContainer
      // hasHeader={false}
      scrollAble={true}
      headerTxt="Recovery Request"
      subHeaderTxt="With recovery agent rating of 7 only 1,200 active Agent was found. Modify Agent rating to improve coverage">
      <Box p="2" px="4" bg="blue.20" borderRadius="5">
        <HStack justifyContent="space-between">
          <VStack width="50%">
            <Text fontSize="xs">Amount to Recovery</Text>
            <Text fontSize="xs" mb="1" mt="1" fontWeight="300">
              N2,000
            </Text>
          </VStack>

          <VStack width="50%">
            <Text fontSize="xs">Repayment Due Date</Text>
            <Text fontSize="xs" mb="1" mt="1" fontWeight="300">
              13th, July 2023
            </Text>
          </VStack>
        </HStack>

        <HStack justifyContent="space-between" mt="2">
          <VStack width="50%">
            <Text fontSize="xs">Repayment Cycle</Text>
            <Text fontSize="xs" mb="1" mt="1">
              1
            </Text>
          </VStack>
          <VStack width="50%">
            <Text fontSize="xs">Days in Arrears</Text>
            <Text fontSize="xs" mb="1" mt="1" fontWeight="200">
              3
            </Text>
          </VStack>
        </HStack>
      </Box>

      <InputBar
        placeholder="Enter rating between 1-10"
        label="Agent Rating"
        value={phoneNumber}
        keyboardType="number-pad"
        onChangeText={text => setPhoneNumber(text)}
      />

      <InputBar
        placeholder="Enter commission in percentage of loan"
        label="Commission %"
        value={phoneNumber}
        keyboardType="number-pad"
        onChangeText={text => setPhoneNumber(text)}
      />

      <InputBar
        isDisabled={true}
        placeholder="N3,000"
        label="Commission Value"
        onChangeText={text => setPhoneNumber(text)}
      />

      <InputBar
        placeholder="Enter rating between 3-21 days"
        label="Recovery duration"
        value={phoneNumber}
        keyboardType="number-pad"
        onChangeText={text => setPhoneNumber(text)}
      />

      <Button
        btnTxt="Create Request"
        btnType="primary"
        // onPress={doSubmit}
        loading={loading}
        // onPress={() =>
        //   navigation.navigate('LoanStack', {screen: 'LoanRequest'})
        // }
        fieldStatus={true}
      />
    </AppContainer>
  );
};
