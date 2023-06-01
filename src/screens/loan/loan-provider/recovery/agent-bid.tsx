import React from 'react';
import {
  Box,
  HStack,
  Pressable,
  Button,
  Input,
  SearchIcon,
  Avatar,
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
      headerTxt="Bids"
      subHeaderTxt="Recovery agent that bid for your loan">
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
          Pending
        </Text>
        <Text
          fontSize="2xs"
          bg="gray.80"
          borderRadius="7"
          p="1"
          _dark={{bg: 'black.90'}}>
          Rejected
        </Text>

        <Text
          fontSize="2xs"
          bg="gray.80"
          borderRadius="7"
          p="1"
          _dark={{bg: 'black.90'}}>
          Approved
        </Text>
        <Text
          fontSize="2xs"
          bg="gray.80"
          borderRadius="7"
          p="1"
          _dark={{bg: 'black.90'}}>
          Name
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
            <HStack space={[2, 3]} justifyContent="space-between" width="90%">
              <Avatar
                size="45px"
                bg="blue.60"
                source={{
                  uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}>
                {/* {item.fullName.charAt(0)} */}
              </Avatar>
              <Text color="gray.100" fontSize="sm">
                Agent Sam, want to recover N45,000 loan from John Doe
              </Text>
            </HStack>

            <Text mt="2" fontWeight="200" color="blue.100">
              Loan Product: Easy Loan
            </Text>

            <HStack justifyContent="space-between">
              <Text color="gray.100">Agent rating: 5.6</Text>

              <Text fontSize="xs" color="blue.100">
                Pending
              </Text>
            </HStack>
            <Text color="gray.100">Arrears: 4 days</Text>
            <Text fontSize="xs" color="blue.100">
              Created on: 21-10-2023
            </Text>

            <HStack mt="2" space="2">
              <Button
                size="xs"
                p="0"
                _text={{
                  px: '2',
                  py: '0',
                }}
                // onPress={() =>
                //   navigation.navigate('LoanStack', {
                //     screen: 'TakeLoan',
                //   })
                // }
              >
                Approve
              </Button>
              <Button
                size="xs"
                p="0"
                _text={{
                  px: '2',
                  py: '0',
                }}
                // onPress={() =>
                //   navigation.navigate('LoanStack', {
                //     screen: 'TakeLoan',
                //   })
                // }
              >
                Reject
              </Button>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item}
      />
    </AppContainer>
  );
};
