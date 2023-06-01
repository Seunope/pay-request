import React from 'react';
import ActiveLoan from './active-loan';
import LoanPortfolio from './loan-portfolio';
import Recommendation from './recommendation';
import TopHeaderBar from '../home/top-header';
import {useNavigation} from '@react-navigation/core';
import DateIcon from '../../../assets/dashboard/loan/date';
import AppContainer from '../../../components/AppContainer';
import {Text, HStack, Box, SearchIcon, Pressable} from 'native-base';

export default () => {
  const navigation = useNavigation();

  return (
    <AppContainer scrollAble={true} isDashboard={true}>
      <TopHeaderBar padding="0" />

      <HStack space="2" mb="0">
        <DateIcon />
        <Text color="gray.100">Thurs, 4th March 2023</Text>
      </HStack>

      <LoanPortfolio />
      <HStack justifyContent="space-between">
        <Text
          color="blue.100"
          fontSize="3xl"
          fontWeight="300"
          onPress={() =>
            navigation.navigate('LoanStack', {screen: 'MarketPlace'})
          }>
          Take a Loan Today!
        </Text>

        <Box justifyContent="flex-end">
          <Box bg="blue.100" p="2" borderRadius="20">
            <Pressable
              onPress={() =>
                navigation.navigate('LoanStack', {screen: 'MarketPlace'})
              }>
              <SearchIcon size="xl" color="white.90" />
            </Pressable>
          </Box>
        </Box>
      </HStack>
      <ActiveLoan />
      <Recommendation />
    </AppContainer>
  );
};
