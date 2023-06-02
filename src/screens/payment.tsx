import {
  Box,
  Text,
  Input,
  Center,
  HStack,
  Actionsheet,
  Pressable,
  useDisclose,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import Button from '../components/Button';
import InputBar from '../components/InputBar';
import colors from '../config/utils/colors';
import {GET_MOVIES} from '../config/api/http';
import StatusModal from '../components/StatusModal';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../components/AppContainer';
import {CircleFade} from 'react-native-animated-spinkit';

export default () => {
  const navigation = useNavigation<any>();
  const {isOpen, onOpen, onClose} = useDisclose();
  const [cardNumber, setCardNumber] = useState<string>();
  const [cardName, setCardName] = useState<string>();
  const [billingAddress, setBillingAddress] = useState<string>();
  const [requestStatus, setRequestStatus] = useState<boolean>(false);

  useEffect(() => {
    fetchRemoteData();
  }, []);

  const fetchRemoteData = async () => {
    const data = await GET_MOVIES();
    console.log('Data', data);
  };

  const doSubmit = () => {
    onOpen();
    setTimeout(() => setRequestStatus(true), 3000);
  };

  return requestStatus ? (
    <StatusModal isSuccess={true} message="Completed" />
  ) : (
    <AppContainer
      scrollAble={true}
      showBack={true}
      backGroundIsWhite={true}
      headerTxt="Add Payment Method">
      <Text>Add a debit Card</Text>

      <InputBar
        value={cardNumber}
        label="Card Number"
        keyboardType="number-pad"
        // error={errors?.lastName}
        hasIcon={true}
        placeholder="Enter number"
        onChangeText={text => setCardNumber(text)}
      />

      <HStack space="2" justifyContent="space-between">
        <Box flex="1" bg="gray.80" borderRadius="6">
          <Text
            fontWeight="300"
            ml="3"
            mb={0}
            fontSize="2xs"
            color="gray.100"
            mb="0">
            Expiry Date
          </Text>
          <Input
            variant="filled"
            placeholder="02/03"
            bg="gray.80"
            borderColor="gray.80"
          />
        </Box>

        <Box flex="1" bg="gray.80" borderRadius="6">
          <Text
            fontWeight="300"
            ml="3"
            mb={0}
            fontSize="2xs"
            color="gray.100"
            mb="0">
            CVV
          </Text>
          <Input
            variant="filled"
            placeholder="***"
            bg="gray.80"
            borderColor="gray.80"
          />
        </Box>
      </HStack>

      <InputBar
        value={cardName}
        label="Cardholder Name"
        // error={errors?.lastName}
        placeholder="Card name"
        onChangeText={text => setCardName(text)}
      />

      <InputBar
        value={billingAddress}
        label="Billing Address"
        // error={errors?.lastName}
        placeholder="Enter address"
        onChangeText={text => setBillingAddress(text)}
      />

      <Text mb="8" />
      <Button btnTxt="Pay" onPress={() => doSubmit()} />

      <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
        <Actionsheet.Content borderTopRadius="10">
          <Center my="40">
            <CircleFade size={100} color={colors.blue[100]} />
            <Pressable mt="8" onPress={() => setRequestStatus(true)}>
              <Text fontSize="xl" fontWeight="300" color="blue.100">
                Transaction
              </Text>
              <Text fontSize="xl" fontWeight="300" color="blue.100" mb="4">
                Processing
              </Text>
            </Pressable>
          </Center>
        </Actionsheet.Content>
      </Actionsheet>
    </AppContainer>
  );
};
