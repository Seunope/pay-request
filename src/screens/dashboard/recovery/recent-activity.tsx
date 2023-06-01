import React from 'react';
import {Text, HStack, VStack} from 'native-base';
import BadLoan from '../../../assets/dashboard/provider/bad';

export default () => {
  return (
    <>
      <Text mt="0" mb="2" color="gray.100" fontWeight="300">
        Recent Activities
      </Text>

      <HStack space={4} mb="4">
        <BadLoan />

        <VStack width="80%">
          <Text fontWeight="300" fontSize="md">
            Received payment for loan recovered
          </Text>
          <Text fontSize="xs" color="gray.100" mt="1">
            With N2,500 09 February 2021, 10:45 AM
          </Text>
        </VStack>
      </HStack>

      <HStack space={4} mb="4">
        <BadLoan />

        <VStack width="80%">
          <Text fontWeight="300" fontSize="md">
            Bided for two loan types
          </Text>
          <Text fontSize="xs" color="gray.100" mt="1">
            With N2,500 09 February 2021, 10:45 AM
          </Text>
        </VStack>
      </HStack>

      <HStack space={4} mb="4">
        <BadLoan />

        <VStack width="80%">
          <Text fontWeight="300" fontSize="md">
            Bid was approved loans
          </Text>
          <Text fontSize="xs" color="gray.100" mt="1">
            With N2,500 09 February 2021, 10:45 AM
          </Text>
        </VStack>
      </HStack>

      <Text
        mt="0"
        mb="0"
        color="gray.100"
        fontWeight="300"
        textAlign="center"
        onPress={() =>
          navigation.navigate('WalletStack', {screen: 'LinkHistory'})
        }>
        See More Activities
      </Text>
    </>
  );
};
