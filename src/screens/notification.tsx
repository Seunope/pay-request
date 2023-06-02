import {
  Box,
  Text,
  HStack,
  VStack,
  Avatar,
  Divider,
  FlatList,
  Pressable,
} from 'native-base';
import React from 'react';
import Utility from '../config/utils/utils';
import Toast from 'react-native-simple-toast';
import EmptyData from '../components/EmptyData';
import LoadingState from '../components/Skeleton';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../components/AppContainer';
import {useTransactions} from '../config/hooks/usePayment';
import {onError, onSuccess} from '../config/api/http-mthd';

export default () => {
  const navigation = useNavigation<any>();
  const {data, error, refetch, isLoading, isFetching, isError} =
    useTransactions();

  if (isError) {
    const msg = onError(error);
    Toast.show(msg, Toast.LONG);
    return <EmptyData onRetry={refetch} />;
  }

  if (isLoading || isFetching) {
    return <LoadingState type="4" />;
  }

  if (data) {
    const res = onSuccess(data);
    // console.log('resDDD', res);
    return (
      <AppContainer
        scrollAble={false}
        showBack={false}
        backGroundIsWhite={false}
        headerTxt="Notification">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={res}
          renderItem={({item}) => (
            <Pressable onPress={() => navigation.navigate('RequestDetails')}>
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
                        {Utility.formatAmount(Number(item.amount))}
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
  }
};
