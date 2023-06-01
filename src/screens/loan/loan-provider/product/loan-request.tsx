import React from 'react';
import {
  Box,
  FlatList,
  HStack,
  Avatar,
  VStack,
  Text,
  Spacer,
  Input,
  Pressable,
  SearchIcon,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../../../../components/AppContainer';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'John Doe applied for ',
    loanProduct: 'Easy Fast Loan',
    timeStamp: 'N5,000',
    recentText: '12-03-2023: 12: 30 am',
    avatarUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Urgent 2k Contribution',
    loanProduct: 'Easy Fast Loan',
    timeStamp: 'N5,000',
    recentText: '12-03-2023: 12: 30 am',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: '15k Contribution',
    loanProduct: 'Easy Fast Loan',
    timeStamp: 'N5,000',
    recentText: '12-03-2023: 12: 30 am',
    avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
  },
  {
    id: '68694a0f-3da1-431f-bd56-142371e29d72',
    fullName: 'Aniket Kumar',
    loanProduct: 'Easy Fast Loan',
    timeStamp: 'N5,000',
    recentText: '12-03-2023: 12: 30 am',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  },
  {
    id: '28694a0f-3da1-471f-bd96-142456e29d72',
    fullName: 'Kiara',
    loanProduct: '12:47 PM',
    timeStamp: 'N5,000',
    recentText: '12-03-2023: 12: 30 am',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
  },
  {
    id: 'bd7acbea-c1ssb1-46c2-aed5-3ad53abb28ba',
    fullName: 'Manjo Group Ajo',
    loanProduct: 'Easy Fast Loan',
    timeStamp: 'N5,000',
    recentText: '12-03-2023: 12: 30 am',
    avatarUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: '3ac68afc-c6s05-48d3-a4f8-fbd91aa97f63',
    fullName: 'Urgent 2k Contribution Mathur',
    loanProduct: 'Easy Fast Loan',
    timeStamp: 'N5,000',
    recentText: '12-03-2023: 12: 30 am',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
  },
];

const LoanRequest = () => {
  const navigation = useNavigation();

  const renderFooter = () => {
    return <Box mb="100" bgColor="red.100" />;
  };

  return (
    <AppContainer
      headerTxt="Loan Request"
      subHeaderTxt="Manage customer loan applications">
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
          Ready
        </Text>
        <Text
          fontSize="2xs"
          bg="gray.80"
          borderRadius="7"
          p="1"
          _dark={{bg: 'black.90'}}>
          Approved
        </Text>
        {/* <Text
          fontSize="2xs"
          bg="gray.80"
          borderRadius="7"
          p="1"
          _dark={{bg: 'black.90'}}>
          Processing
        </Text> */}
        <Text
          fontSize="2xs"
          bg="gray.80"
          borderRadius="7"
          p="1"
          _dark={{bg: 'black.90'}}>
          Repaid
        </Text>
      </HStack>

      <HStack width="82%" space="2">
        <Input
          variant="filled"
          w="100%"
          borderRadius={15}
          placeholder="Enter customer name"
        />

        <Box justifyContent="flex-end">
          <Box bg="blue.100" p="1" borderRadius="15">
            <Pressable>
              <SearchIcon size="xl" color="white.90" />
            </Pressable>
          </Box>
        </Box>
      </HStack>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('LoanStack', {screen: 'LoanDetails'})
            }>
            <Box
              py="2"
              mb="2"
              bg="blue.20"
              borderRadius="7"
              _dark={{bg: 'black.90'}}>
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar
                  size="45px"
                  bg="blue.60"
                  source={{
                    uri: item.avatarUrl,
                  }}>
                  {item.fullName.charAt(0)}
                </Avatar>

                <VStack width="100%">
                  <HStack justifyContent="space-between" width="80%">
                    <Text
                      color="black.100"
                      fontWeight="300"
                      _dark={{color: 'gray.90'}}>
                      {item.fullName}
                    </Text>

                    <Text fontSize="xs" color="gray.100">
                      {item.timeStamp}
                    </Text>
                  </HStack>

                  <Text
                    mb="1"
                    fontSize="xs"
                    color="coolGray.600"
                    fontWeight="200">
                    {item.loanProduct}
                  </Text>
                  <HStack justifyContent="space-between" width="80%">
                    <Text mb="1" fontSize="xs" color="gray.100">
                      {item.recentText}
                    </Text>
                    <Text
                      mb="1"
                      fontSize="xs"
                      color="blue.100"
                      fontWeight="300">
                      Approved
                    </Text>
                  </HStack>
                </VStack>
                <Spacer />
              </HStack>
            </Box>
          </Pressable>
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={renderFooter}
      />
    </AppContainer>
  );
};
export default LoanRequest;
