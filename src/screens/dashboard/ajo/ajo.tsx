import React from 'react';
import AjoSlider from './slider';
import TopHeaderBar from '../home/top-header';
import {Text, HStack, Badge, Box, Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../../../components/AppContainer';

export default () => {
  const navigation = useNavigation();

  return (
    <AppContainer scrollAble={true} isDashboard={true}>
      <TopHeaderBar padding="0" />
      <Text>Thrift/Ajo</Text>
      <HStack
        flex="1"
        space={{
          base: 2,
          sm: 4,
        }}
        mx={{
          // base: 'auto',
          md: 0,
        }}>
        <Badge colorScheme="success">Active(2)</Badge>
        <Pressable
          onPress={() =>
            navigation.navigate('AjoStack', {screen: 'CreateGroup'})
          }>
          <Badge colorScheme="danger">Create Thrift</Badge>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate('AjoStack', {screen: 'GroupList'})
          }>
          <Badge colorScheme="coolGray">View all</Badge>
        </Pressable>
        <Badge colorScheme="info">Completed(10)</Badge>
      </HStack>

      <Box
        p="2"
        bgColor="red.90"
        borderRadius="7"
        mb="4"
        _dark={{
          bgColor: 'black.90',
        }}>
        <Text>
          You don't belong to any group. Create a Group contribution today!
        </Text>
      </Box>
      <AjoSlider />
    </AppContainer>
  );
};
