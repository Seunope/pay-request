import React from 'react';
// import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {
  HStack,
  Box,
  Text,
  ChevronRightIcon,
  Pressable,
  VStack,
} from 'native-base';
import EmptyData from '../../../components/EmptyData';
import LoadingState from '../../../components/Skeleton';
import Toasts from '../../../config/services/toast/Toast';
import Thrift from '../../../assets/dashboard/features/thrift';
import Biller from '../../../assets/dashboard/features/biller';
import {onError, onSuccess} from '../../../config/api/http-mthd';
import FundLoan from '../../../assets/dashboard/features/fund-loan';
import TakeLoan from '../../../assets/dashboard/features/take-loan';
import {useGetVerificationStatus} from '../../../config/hooks/useUser';
import Verification from '../../../assets/dashboard/features/verification';

const Features = () => {
  const navigation = useNavigation();
  const {data, error, refetch, isLoading, isFetching, isError} =
    useGetVerificationStatus();

  const handleNavigation = (type: string) => {
    const res = onSuccess(data);
    if (type === 'Provider') {
      if (res.canBeProvider) {
        navigation.navigate('DashboardTab', {screen: 'Provider'});
      } else {
        Toasts.info('Verify your details to access this feature');
        navigation.navigate('LoanStack', {screen: 'Identity'});
      }
    } else if (type === 'Loan') {
      navigation.navigate('DashboardTab', {screen: 'Loan'});
    } else {
      navigation.navigate('DashboardTab', {screen: 'Recovery'});
    }
  };

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);
    return <EmptyData onRetry={refetch} />;
  }

  if (isLoading || isFetching) {
    return <LoadingState type="4" />;
  }

  if (data) {
    const res = onSuccess(data);
    console.log('res.data.', res);

    return (
      <Box
        bgColor="gray.70"
        px="4"
        pb="2"
        _dark={{
          bgColor: 'black.90',
        }}>
        {!res.status ? (
          <Pressable
            onPress={() =>
              navigation.navigate('LoanStack', {screen: 'Identity'})
            }>
            <HStack
              p="2"
              mt="2"
              bgColor="white.100"
              borderRadius="md"
              _dark={{
                bgColor: 'black.100',
              }}>
              <VStack width="22%">
                <Verification />
              </VStack>
              <VStack p="1" flex="1" width="78%">
                <Text fontWeight="300">Verify your identity</Text>
                <Text fontSize="xs">To have access amazing features</Text>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text color="blue.90" fontWeight={300} mt="1">
                    Start verification
                  </Text>
                  <ChevronRightIcon color="blue.90" />
                </HStack>
              </VStack>
            </HStack>
          </Pressable>
        ) : null}

        <Pressable
          onPress={() =>
            navigation.navigate('BillerStack', {screen: 'AirTimeAndData'})
          }>
          <HStack
            p="2"
            mt="2"
            bgColor="white.100"
            borderRadius="md"
            _dark={{
              bgColor: 'black.100',
            }}>
            <VStack width="22%">
              <Biller />
            </VStack>
            <VStack p="1" flex="1" width="78%">
              <Text fontWeight="300">Airtime & Data</Text>
              <Text fontSize="xs">Get the best rate here</Text>
              <HStack justifyContent="space-between" alignItems="center">
                <Text color="blue.90" fontWeight={300} mt="1">
                  Recharge Now
                </Text>
                <ChevronRightIcon color="blue.90" />
              </HStack>
            </VStack>
          </HStack>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('DashboardTab', {screen: 'Ajo'})}>
          <HStack
            p="2"
            mt="2"
            bgColor="white.100"
            borderRadius="md"
            _dark={{
              bgColor: 'black.100',
            }}>
            <VStack width="22%">
              <Thrift />
            </VStack>
            <VStack p="1" flex="1" width="78%">
              <Text fontWeight="300">Ajo/Thrift</Text>
              <Text fontSize="xs">Automated group contribution </Text>
              <HStack justifyContent="space-between" alignItems="center">
                <Text color="blue.90" fontWeight={300} mt="1">
                  Start Ajo today
                </Text>
                <ChevronRightIcon color="blue.90" />
              </HStack>
            </VStack>
          </HStack>
        </Pressable>

        <Pressable onPress={() => handleNavigation('Loan')}>
          <HStack
            p="2"
            mt="2"
            bgColor="white.100"
            borderRadius="md"
            _dark={{
              bgColor: 'black.100',
            }}>
            <VStack width="22%">
              <TakeLoan />
            </VStack>
            <VStack p="1" flex="1" width="78%">
              <Text fontWeight="300">Take a Loan</Text>
              <Text fontSize="xs">Access loans with flexible rates</Text>
              <HStack justifyContent="space-between" alignItems="center">
                <Text color="blue.90" fontWeight={300} mt="1">
                  Visit Loan Market
                </Text>
                <ChevronRightIcon color="blue.90" />
              </HStack>
            </VStack>
          </HStack>
        </Pressable>

        <Pressable onPress={() => handleNavigation('Provider')}>
          <HStack
            p="2"
            mt="2"
            bgColor="white.100"
            borderRadius="md"
            _dark={{
              bgColor: 'black.100',
            }}>
            <VStack width="22%">
              <FundLoan />
            </VStack>
            <VStack p="1" flex="1" width="78%">
              <Text fontWeight="300">Fund a Loan</Text>
              <Text fontSize="xs">Give out loans and earn from interest</Text>
              <HStack justifyContent="space-between" alignItems="center">
                <Text color="blue.90" fontWeight={300} mt="1">
                  Get started
                </Text>
                <ChevronRightIcon color="blue.90" />
              </HStack>
            </VStack>
          </HStack>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate('DashboardTab', {screen: 'Recovery'})
          }>
          <HStack
            p="2"
            mt="2"
            bgColor="white.100"
            borderRadius="md"
            _dark={{
              bgColor: 'black.100',
            }}>
            <VStack width="22%">
              <Verification />
            </VStack>
            <VStack p="1" flex="1" width="78%">
              <Text fontWeight="300">Recover a Loan</Text>
              <Text fontSize="xs">Earn as you recover due loans</Text>
              <HStack justifyContent="space-between" alignItems="center">
                <Text color="blue.90" fontWeight={300} mt="1">
                  Become an Agent
                </Text>
                <ChevronRightIcon color="blue.90" />
              </HStack>
            </VStack>
          </HStack>
        </Pressable>
      </Box>
    );
  }
};
export default Features;
