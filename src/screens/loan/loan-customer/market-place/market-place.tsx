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
import AppContainer from '../../../../components/AppContainer';

const data = [0, 2, 3, 4, 5, 6, 7];
export default () => {
  const navigation = useNavigation();

  return (
    <AppContainer
      checkSession={true}
      headerTxt="Loan Market Place"
      subHeaderTxt="Find Loan Opportunities here">
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
          Interest
        </Text>
        <Text
          fontSize="2xs"
          bg="gray.80"
          borderRadius="7"
          p="1"
          _dark={{bg: 'black.90'}}>
          Tenure
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
            <HStack space="2">
              <Text
                fontSize="2xs"
                bg="white.100"
                borderRadius="7"
                p="1"
                _dark={{bg: 'black.90'}}>
                Interest: 7%
              </Text>
              <Text
                fontSize="2xs"
                bg="white.100"
                borderRadius="7"
                p="1"
                _dark={{bg: 'black.90'}}>
                Default: 0.02%
              </Text>
              <Text
                fontSize="2xs"
                bg="white.100"
                borderRadius="7"
                p="1"
                _dark={{bg: 'black.90'}}>
                Max Tenure: 120 days
              </Text>
            </HStack>

            <HStack space="2" mt="2">
              <Text
                fontSize="2xs"
                bg="white.100"
                borderRadius="7"
                p="1"
                _dark={{bg: 'black.90'}}>
                Default Grace: 2 days
              </Text>
              <Text
                fontSize="2xs"
                bg="white.100"
                borderRadius="7"
                p="1"
                _dark={{bg: 'black.90'}}>
                Sold loans 3/10
              </Text>

              <Text
                fontSize="2xs"
                bg="white.100"
                borderRadius="7"
                p="1"
                _dark={{bg: 'black.90'}}>
                Credit score 5
              </Text>
            </HStack>
            <Text fontSize="xl" fontWeight="200" color="blue.100" mt="2">
              Gbadebo Loans
            </Text>
            <Text fontWeight="300">₦45,000</Text>

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
                  navigation.navigate('LoanStack', {
                    screen: 'TakeLoan',
                  })
                }>
                Apply Now
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
          </Box>
        )}
        keyExtractor={item => item}
      />
    </AppContainer>
  );
};
