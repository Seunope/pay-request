import React from 'react';
import BackIcon from '../assets/back';
import Button from '../components/Button';
import BellIcon from '../assets/others/bell';
import BlockIcon from '../assets/request/block';
import HistoryIcon from '../assets/request/history';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../components/AppContainer';
import HistoryHomeIcon from '../assets/nav-bottom/home';
import {Box, HStack, VStack, Avatar, Text} from 'native-base';

export default () => {
  const navigation = useNavigation<any>();

  return (
    <AppContainer
      scrollAble={true}
      showBack={true}
      backGroundIsWhite={true}
      headerTxt="Request Details">
      <HStack space="4" bg="gray.70" p="4" borderRadius="6">
        <Avatar
          size="xl"
          bg="blue.100"
          mr="2.5"
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
          }}>
          {/* {username.charAt(0)} */} H
        </Avatar>

        <VStack>
          <Text
            fontSize="md"
            my="2"
            color="blue.90"
            fontWeight={300}
            fontFamily="heading">
            Shola Ajayi
          </Text>
          <Text fontSize="xs" color="gray.100" mb="1">
            +432 123 123 1234
          </Text>
          <Text fontSize="xs" color="gray.100" mb="1">
            peterfajemisin@gmail.com
          </Text>
        </VStack>
      </HStack>

      <Box p="4" bg="blue.60" mt="2" borderRadius="6">
        <VStack mb="4">
          <HStack justifyContent="space-between">
            <Text mb="1" fontSize="xs" color="coolGray.600">
              You Pay
            </Text>
            <Text mb="1" fontSize="xs" color="coolGray.600">
              Receiver gets
            </Text>
          </HStack>

          <HStack justifyContent="space-between">
            <Text mb="1" fontWeight="400">
              GBP.70
            </Text>
            <Text mb="1" fontWeight="400">
              NGN 45,0000
            </Text>
          </HStack>
        </VStack>

        <VStack mb="4">
          <HStack justifyContent="space-between">
            <Text mb="1" fontSize="xs" color="coolGray.600">
              Fee
            </Text>
            <Text mb="1" fontSize="xs" color="coolGray.600">
              Fee included
            </Text>
          </HStack>

          <HStack justifyContent="space-between">
            <Text mb="1" fontWeight="400">
              GBP.1
            </Text>
            <Text mb="1" fontWeight="400">
              No
            </Text>
          </HStack>
        </VStack>

        <VStack mb="4">
          <HStack justifyContent="space-between">
            <Text mb="1" fontSize="xs" color="coolGray.600">
              Total
            </Text>
            <Text mb="1" fontSize="xs" color="coolGray.600">
              Account Number
            </Text>
          </HStack>

          <HStack justifyContent="space-between">
            <Text mb="1" fontWeight="400">
              GBP.1
            </Text>
            <Text mb="1" fontWeight="400">
              090909009
            </Text>
          </HStack>
        </VStack>

        <VStack mb="4">
          <HStack justifyContent="space-between">
            <Text mb="1" fontSize="xs" color="coolGray.600">
              Exchange rate
            </Text>
            <Text mb="1" fontSize="xs" color="coolGray.600">
              Bank
            </Text>
          </HStack>

          <HStack justifyContent="space-between">
            <Text mb="1" fontWeight="400">
              GBP.1 = NGN 45,000
            </Text>
            <Text mb="1" fontWeight="400">
              GTB
            </Text>
          </HStack>
        </VStack>
      </Box>

      <HStack space={2} justifyContent="space-between" mt="8">
        <Button btnTxt="Pay" onPress={() => navigation.navigate('Payment')} />
        <Button
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
