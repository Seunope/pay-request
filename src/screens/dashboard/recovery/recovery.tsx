import React from 'react';
import TopHeaderBar from '../home/top-header';
import RecentActivity from './recent-activity';
import LoanPortfolio from './recovery-portfolio';
import EyeIcon from '../../../assets/others/eye';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../../../components/AppContainer';
import {Text, HStack, VStack, Button, Box} from 'native-base';

export default () => {
  const navigation = useNavigation();

  return (
    <AppContainer scrollAble={true} isDashboard={true}>
      <TopHeaderBar padding="0" />

      <HStack justifyContent="space-between">
        <Text>Recovery Agent</Text>
        <Text
          fontSize="xs"
          color="blue.90"
          textDecorationLine="underline"
          onPress={() =>
            navigation.navigate('LoanStack', {screen: 'RecoveryBid'})
          }>
          My Recovery Bids
        </Text>
      </HStack>

      {/* <Box
        p="2"
        px="4"
        borderWidth="1"
        borderColor="gray.90"
        // bgColor="gray.80"
        borderRadius="5"> */}
      <HStack justifyContent="space-between">
        <VStack
          width="50%"
          p="2"
          px="4"
          borderWidth="1"
          borderColor="gray.90"
          justifyContent="space-between"
          borderRadius="5">
          <HStack
            justifyContent="space-between"
            // justifyContent="flex-end"
            // alignContent="flex-end"
            // alignItems="flex-end"
          >
            <HStack space="2">
              <Text fontSize="5xl">7.1</Text>
              <Text mt="8">Rating</Text>
            </HStack>
            <EyeIcon isVisible={true} />
          </HStack>

          <Box>
            <Text fontSize="xs">Available Balance</Text>
            <Text fontSize="md" mb="1" mt="1" fontWeight="300">
              N400,0000
            </Text>
          </Box>
        </VStack>
        <VStack width="50%">
          <Box
            p="2"
            borderWidth="1"
            borderColor="gray.90"
            mb="2"
            ml="2"
            borderRadius="5">
            <Text fontSize="2xs">Amount Recovered</Text>
            <Text fontSize="2xs" fontWeight="300">
              N300,000,000
            </Text>
          </Box>

          <Box
            p="2"
            borderWidth="1"
            borderColor="gray.90"
            mb="2"
            ml="2"
            borderRadius="5">
            <Text fontSize="2xs">Amount Earned</Text>
            <Text fontSize="2xs" fontWeight="300">
              N20,0000
            </Text>
          </Box>

          <Box
            p="2"
            borderWidth="1"
            borderColor="gray.90"
            // mb="2"
            ml="2"
            borderRadius="5">
            <Text fontSize="2xs">Revenue Lost</Text>
            <Text fontSize="2xs" fontWeight="300">
              N4,0000
            </Text>
          </Box>
        </VStack>
      </HStack>
      {/* </Box> */}

      <LoanPortfolio />

      <Box bgColor="gray.70" p="4" borderRadius="7" _dark={{bg: 'black.90'}}>
        <Text mb="2">Bid to recovery a loan to earn cool cash....</Text>
        <Button
          size="sm"
          onPress={() =>
            navigation.navigate('LoanStack', {screen: 'RecoveryMarketPlace'})
          }>
          Recover a Loan
        </Button>
      </Box>

      <RecentActivity />
    </AppContainer>
  );
};
