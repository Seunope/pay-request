import React from 'react';
import Button from './Button';
import FailedIcon from '../assets/failed';
import SuccessIcon from '../assets/success';
import {useNavigation} from '@react-navigation/core';
import {
  Box,
  Text,
  VStack,
  Center,
  Avatar,
  HStack,
  ScrollView,
} from 'native-base';

interface Props {
  isSuccess: boolean;
  message: string;
}

export default (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <Box p="5" flex="1" safeArea bgColor={'blue.50'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={4}>
          <HStack space="4" bg="white.100" p="4" borderRadius="6" mt="2">
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

          <Box p="4" bg="white.100" mt="2" borderRadius="6">
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

          <Center p="4">
            {props.isSuccess ? <SuccessIcon /> : <FailedIcon />}
          </Center>

          <Box>
            <Text
              textAlign="center"
              fontSize="xl"
              fontWeight="300"
              color="blue.100">
              Transaction
            </Text>
            <Text
              textAlign="center"
              fontSize="xl"
              fontWeight="300"
              color="blue.100"
              mb="4">
              {props.message}
            </Text>
          </Box>

          <Button
            btnTxt="Done"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Notification'}],
              })
            }
          />
          <Text mt="2" />
        </VStack>
      </ScrollView>
    </Box>
  );
};
