import React from 'react';
import {
  Box,
  HStack,
  FlatList,
  VStack,
  Pressable,
  Divider,
  Stack,
  Avatar,
  Text,
  // Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../components/AppContainer';
import Button from '../components/Button';
import ProfileIcon from '../assets/request/profile';
import BlockIcon from '../assets/request/block';
import HistoryIcon from '../assets/request/history';
import BackIcon from '../assets/back';
import HistoryHomeIcon from '../assets/nav-bottom/home';

export default () => {
  const navigation = useNavigation<any>();

  return (
    <AppContainer
      scrollAble={true}
      showBack={true}
      backGroundIsWhite={true}
      headerTxt="Add Payment Method">
      <Text>Add a debit Card</Text>
    </AppContainer>
  );
};
