import {
  Text,
  Input,
  Center,
  HStack,
  Actionsheet,
  Pressable,
  useDisclose,
} from 'native-base';
import React, {useState} from 'react';
import Button from '../components/Button';
import InputBar from '../components/InputBar';
import colors from '../config/utils/colors';
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
  const [lastName, setLastName] = useState<string>();
  const [requestStatus, setRequestStatus] = useState<boolean>(false);

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
        name="lastName"
        value={cardNumber}
        label="Card Number"
        keyboardType="number-pad"
        // error={errors?.lastName}
        hasIcon={true}
        placeholder="Enter number"
        onChangeText={text => setCardNumber(text)}
      />

      <HStack justifyContent="space-between">
        <Input variant="filled" placeholder="Filled" />

        <Input variant="filled" placeholder="Filled" />
      </HStack>

      <InputBar
        name="lastName"
        value={cardName}
        label="Cardholder Name"
        // error={errors?.lastName}
        placeholder="Valid Last name"
        onChangeText={text => setCardName(text)}
      />

      <InputBar
        name="lastName"
        value={billingAddress}
        label="Billing Address"
        // error={errors?.lastName}
        placeholder="Enter address"
        onChangeText={text => setBillingAddress(text)}
      />

      <Text mb="8" />
      <Button btnTxt="Pay" onPress={onOpen} />

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
