import React from 'react';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/core';
import {useUserData} from '../../config/hooks/useUser';
import {onError, onSuccess} from '../../config/api/http-mthd';
import {
  Box,
  HStack,
  VStack,
  Avatar,
  Pressable,
  Text,
  Skeleton,
} from 'native-base';

export default () => {
  const {data, error, refetch, isLoading, isFetching, isError} = useUserData();

  if (isError) {
    const msg = onError(error);
    Toast.show(msg, Toast.LONG);
    return (
      <Pressable p="2" onPress={() => refetch()}>
        <Text fontSize="xs" textAlign="center" color="blue.70">
          Reload Data
        </Text>
      </Pressable>
    );
  }

  if (isLoading || isFetching) {
    return <Skeleton.Text px="4" />;
  }

  if (data) {
    const res = onSuccess(data);
    console.log('resDDD', res);
    return (
      <HStack space="4" bg="gray.70" p="4" borderRadius="6">
        <Avatar
          size="xl"
          bg="blue.100"
          mr="2.5"
          source={{
            uri: res.photoUrl,
          }}>
          {/* {username.charAt(0)} */} H
        </Avatar>

        <VStack>
          <Text
            fontSize="md"
            my="2"
            color="blue.90"
            fontWeight={300}
            fontFamily="heading">
            {res.firstName} {res.lastName}
          </Text>
          <Text fontSize="xs" color="gray.100" mb="1">
            {res.phoneNumber}
          </Text>
          <Text fontSize="xs" color="gray.100" mb="1">
            {res.email}
          </Text>
        </VStack>
      </HStack>
    );
  }
};
