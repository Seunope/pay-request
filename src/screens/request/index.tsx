import React from 'react';
import UserData from './user';
import BackIcon from '../../assets/back';
import TransactionDetails from './details';
import ButtonApp from '../../components/Button';
import BellIcon from '../../assets/others/bell';
import BlockIcon from '../../assets/request/block';
import HistoryIcon from '../../assets/request/history';
import EmptyData from '../../components/EmptyData';
import Utility from '../../config/utils/utils';
import Toast from 'react-native-simple-toast';
import LoadingState from '../../components/Skeleton';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../../components/AppContainer';
import HistoryHomeIcon from '../../assets/nav-bottom/home';
import {useTransaction} from '../../config/hooks/usePayment';
import {useUserData} from '../../config/hooks/useUser';
import {onError, onSuccess} from '../../config/api/http-mthd';
import {Box, HStack, VStack, Avatar, Button, Text, Skeleton} from 'native-base';

export default () => {
  const navigation = useNavigation<any>();
  // const {data, error, refetch, isLoading, isFetching, isError} = useUserData();

  // if (isError) {
  //   const msg = onError(error);
  //   Toast.show(msg, Toast.LONG);
  //   return <EmptyData onRetry={refetch} />;
  // }

  // if (isError) {
  //   const msg = onError(error);
  //   Toast.show(msg, Toast.LONG);
  //   return (
  //     <Button onPress={() => refetch()} size="xs" variant="unstyled">
  //       Reload Data
  //     </Button>
  //   );
  // }

  // if (isLoading || isFetching) {
  //   return <Skeleton.Text px="4" />;
  //   // return <LoadingState type="4" />;
  // }

  return (
    <AppContainer
      scrollAble={true}
      showBack={true}
      backGroundIsWhite={true}
      headerTxt="Request Details">
      <UserData />

      <TransactionDetails />

      <HStack space={2} justifyContent="space-between" mt="8">
        <ButtonApp
          btnTxt="Pay"
          onPress={() => navigation.navigate('Payment')}
        />
        <ButtonApp
          btnTxt="Decline"
          onPress={() => navigation.navigate('Decline')}
        />
      </HStack>

      <Text color="blue.80" mt="4" fontSize="xs" textDecorationLine="underline">
        More Details
      </Text>

      <HStack space="4">
        <BellIcon isActive={false} color="#000" />
        <Text fontWeight="400">Report Shola</Text>
      </HStack>
      <HStack space="4">
        <BellIcon isActive={false} color="#000" />
        <Text fontWeight="400">Block Peter</Text>
      </HStack>

      <HStack space="4" mb="8">
        <BellIcon isActive={false} color="#000" />
        <Text fontWeight="400">Show History</Text>
      </HStack>
    </AppContainer>
  );
};
