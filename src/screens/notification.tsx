import React from 'react';
import {
  Box,
  HStack,
  FlatList,
  VStack,
  Pressable,
  Divider,
  Avatar,
  Text,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../components/AppContainer';
const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2p8ba',
    fullName: 'Shola Ajayi',
    date: 'April6, 20202',
    amount: '#700',
    avatarUrl:
      '1https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Shola Ajayi',
    date: 'April6, 20202 9:45:09am',
    amount: '#700',
    avatarUrl:
      '1https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Shola Ajayi',
    date: 'April6, 20202',
    amount: '#700',
    avatarUrl: '1https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
  },
  {
    id: '68694a0f-3da1-431f-bd56-142371e29d7o2',
    fullName: 'Shola Ajayi',
    date: 'April6, 20202',
    amount: '#700',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  },
];
export default () => {
  const navigation = useNavigation<any>();

  return (
    <AppContainer
      scrollAble={false}
      showBack={false}
      backGroundIsWhite={false}
      headerTxt="Notification">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('LoanStack', {screen: 'LoanDetails'})
            }>
            <Box
              py="1"
              mb="2"
              bg="blue.20"
              borderRadius="7"
              _dark={{bg: 'black.90'}}>
              <HStack space={[3, 4]} justifyContent="space-between">
                <Avatar size="40px" bg="red.100">
                  {item.fullName.toUpperCase().charAt(0) +
                    '' +
                    item.fullName.toUpperCase().charAt(1)}
                </Avatar>

                <VStack width="100%">
                  <HStack justifyContent="space-between" width="80%">
                    <Text
                      color="black.100"
                      fontWeight="300"
                      _dark={{color: 'gray.90'}}>
                      {item.fullName}
                    </Text>

                    <Text fontSize="xs" color="blue.90" fontWeight="400">
                      {item.amount}
                    </Text>
                  </HStack>
                  <HStack justifyContent="space-between" width="80%">
                    <Text
                      mb="1"
                      fontSize="xs"
                      color="coolGray.600"
                      fontWeight="200">
                      {item.date}
                    </Text>
                    <Text
                      color="blue.80"
                      fontSize="xs"
                      textDecorationLine="underline">
                      view
                    </Text>
                  </HStack>
                </VStack>
                {/* <Spacer /> */}
              </HStack>
              <Divider my="2" bg="gray.80" />
            </Box>
          </Pressable>
        )}
        keyExtractor={item => item.id}
        // ListFooterComponent={renderFooter}
      />
    </AppContainer>
  );
};
