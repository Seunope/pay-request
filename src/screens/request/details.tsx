import React from 'react';
import Toast from 'react-native-simple-toast';
import Utility from '../../config/utils/utils';
import LoadingState from '../../components/Skeleton';
import {useTransaction} from '../../config/hooks/usePayment';
import {onError, onSuccess} from '../../config/api/http-mthd';
import {Box, HStack, VStack, Pressable, Text} from 'native-base';

export default () => {
  const {data, error, refetch, isLoading, isFetching, isError} =
    useTransaction();

  if (isError) {
    const msg = onError(error);
    Toast.show(msg, Toast.LONG);
    return (
      <Pressable p="2" m="4" onPress={() => refetch()}>
        <Text fontSize="xs" textAlign="center" color="blue.70">
          Reload Data
        </Text>
      </Pressable>
    );
  }

  if (isLoading || isFetching) {
    return <LoadingState type="4" />;
  }

  if (data) {
    const res = onSuccess(data);
    console.log('resDDD', res);
    return (
      <Box p="4" bg="blue.60" mt="2" borderRadius="6">
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
              {Utility.formatAmount(Number(res?.pay?.amount))}
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
              {Utility.formatAmount(Number(res?.remittance?.fee?.amount))}
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
              {res.beneficiary?.bankDetails?.accountNumber}
            </Text>
          </HStack>
        </VStack>

        <VStack mb="4">
          <HStack justifyContent="space-between">
            <Text mb="1" fontSize="xs" color="coolGray.600">
              Settlement
            </Text>
            <Text mb="1" fontSize="xs" color="coolGray.600">
              Bank
            </Text>
          </HStack>

          <HStack justifyContent="space-between">
            <Text mb="1" fontWeight="400">
              {Utility.formatAmount(Number(res?.settlement?.amount))}
            </Text>
            <Text mb="1" fontWeight="400">
              GTB
            </Text>
          </HStack>
        </VStack>
      </Box>
    );
  }
};
