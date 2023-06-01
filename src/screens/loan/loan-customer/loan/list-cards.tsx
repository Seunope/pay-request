import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, Pressable, HStack, FlatList} from 'native-base';
import AppContainer from '../../../../components/AppContainer';
import AtmChip from '../../../../assets/loan/customer/atm-chip';

const data = [0, 2, 3, 4];

export default () => {
  const navigation = useNavigation();

  return (
    <AppContainer
      scrollAble={false}
      headerTxt="Pick a Card"
      subHeaderTxt="Kindly link a card to your loan">
      <Text>
        You are authorizing us to debit your card when your loan is due.
      </Text>

      <Text textAlign="right" fontWeight="200" color="blue.90">
        Add new Card
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('LoanStack', {screen: 'TermOfUse'})
            }>
            <HStack
              mb="2"
              p="3"
              space={2}
              width="100%"
              borderWidth="1"
              borderRadius="7"
              borderColor="gray.90">
              <AtmChip />
              <Text>GTBank *** *** **** 09833</Text>
            </HStack>
          </Pressable>
        )}
        keyExtractor={item => item}
      />
    </AppContainer>
  );
};
