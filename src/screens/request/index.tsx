import React from 'react';
import UserData from './user';
import TransactionDetails from './details';
import ButtonApp from '../../components/Button';
import BellIcon from '../../assets/others/bell';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../../components/AppContainer';
import {Box, HStack, VStack, Avatar, Button, Text, Skeleton} from 'native-base';

export default () => {
  const navigation = useNavigation<any>();

  return (
    <AppContainer
      scrollAble={true}
      showBack={true}
      backGroundIsWhite={true}
      headerTxt="Request Details">
      <UserData />

      <TransactionDetails />

      <HStack space={2} justifyContent="space-between" mt="8">
        <ButtonApp
          btnTxt="Pay"
          onPress={() => navigation.navigate('Payment')}
        />
        <ButtonApp
          btnTxt="Decline"
          onPress={() => navigation.navigate('Decline')}
        />
      </HStack>

      <Text color="blue.80" mt="4" fontSize="xs" textDecorationLine="underline">
        More Details
      </Text>

      <HStack space="4">
        <BellIcon isActive={false} color="#000" />
        <Text fontWeight="400">Report Shola</Text>
      </HStack>
      <HStack space="4">
        <BellIcon isActive={false} color="#000" />
        <Text fontWeight="400">Block Peter</Text>
      </HStack>

      <HStack space="4" mb="8">
        <BellIcon isActive={false} color="#000" />
        <Text fontWeight="400">Show History</Text>
      </HStack>
    </AppContainer>
  );
};
