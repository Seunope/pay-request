import React from 'react';
import {
  Box,
  HStack,
  Pressable,
  Button,
  Input,
  SearchIcon,
  Text,
  FlatList,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../../../components/AppContainer';
import Toasts from '../../../config/services/toast/Toast';

const data = [0, 2, 3, 4, 5, 6, 7];
export default () => {
  const navigation = useNavigation();

  return (
    <AppContainer
      checkSession={true}
      headerTxt="Recovery Market Place"
      subHeaderTxt="Recover a loan an earn cool cash 💰">
      <HStack space="2">
        <Text fontSize="2xs" fontWeight="300" p="1">
          Search by:
        </Text>
        <Text
          fontSize="2xs"
          bg="gray.80"
          borderRadius="7"
          p="1"
          _dark={{bg: 'black.90'}}>
          Amount
        </Text>
        <Text
          fontSize="2xs"
          bg="gray.80"
          borderRadius="7"
          p="1"
          _dark={{bg: 'black.90'}}>
          Commission
        </Text>

        <Text
          fontSize="2xs"
          bg="gray.80"
          borderRadius="7"
          p="1"
          _dark={{bg: 'black.90'}}>
          Provider
        </Text>
        <Text
          fontSize="2xs"
          bg="gray.80"
          borderRadius="7"
          p="1"
          _dark={{bg: 'black.90'}}>
          Score
        </Text>
      </HStack>
      <HStack width="82%" space="2">
        <Input
          variant="filled"
          w="100%"
          borderRadius={15}
          placeholder="Let's find what you looking for"
        />

        <Box justifyContent="flex-end">
          <Box bg="blue.100" p="1" borderRadius="15">
            <Pressable>
              <SearchIcon size="xl" color="white.90" />
            </Pressable>
          </Box>
        </Box>
      </HStack>

      <Text fontSize="2xs" color="blue.100">
        Found 30 results in 0.30sec
      </Text>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <Box
            bg="white.90"
            p="4"
            borderRadius="7"
            mb="2"
            _dark={{bg: 'black.90'}}>
            <Text fontWeight="300">Amount to Recover ₦45,000</Text>

            <HStack justifyContent="space-between">
              <Text color="gray.100">Provider rating: 5.6</Text>

              <Button
                size="xs"
                p="0"
                _text={{
                  px: '2',
                  py: '0',
                }}
                onPress={() =>
                  // navigation.navigate('LoanStack', {
                  //   screen: 'TakeLoan',
                  // })
                  Toasts.success('Your bid was successful')
                }>
                Bid Now
              </Button>
            </HStack>
            <Text
              fontSize="2xs"
              color="blue.80"
              textDecorationLine="underline"
              onPress={() =>
                navigation.navigate('LoanStack', {
                  screen: 'MarketPlaceProvider',
                })
              }>
              Powered by Gbedebo & Sons
            </Text>

            <HStack space="2" mt="2">
              <Text
                fontSize="2xs"
                bg="white.100"
                borderRadius="7"
                p="1"
                _dark={{bg: 'black.90'}}>
                Commission: 7%
              </Text>
              <Text
                fontSize="2xs"
                bg="white.100"
                borderRadius="7"
                p="1"
                _dark={{bg: 'black.90'}}>
                Commission Value: N1,500
              </Text>
            </HStack>

            <HStack space="2" mt="2">
              <Text
                fontSize="2xs"
                bg="white.100"
                borderRadius="7"
                p="1"
                _dark={{bg: 'black.90'}}>
                Recovery Duration: 21 days
              </Text>

              <Text
                fontSize="2xs"
                bg="white.100"
                borderRadius="7"
                p="1"
                _dark={{bg: 'black.90'}}>
                Days in Arrears: 4
              </Text>
            </HStack>

            <HStack justifyContent="space-between" mt="2">
              <Text fontSize="xs" color="blue.100">
                Created at: 21-10-2023
              </Text>
              <Text
                fontSize="xs"
                bg="yellow.70"
                _dark={{
                  color: 'black.90',
                }}
                borderRadius="5"
                px="1">
                12 Bids
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item}
      />
    </AppContainer>
  );
};
