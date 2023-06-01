import React from 'react';
import BackIcon from '../assets/back';
import BellIcon from '../assets/bell';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Box, useColorMode, Pressable} from 'native-base';

interface HeaderProps {
  showBackArrow?: boolean;
  showNotification?: boolean;
}

const HeaderContainer = ({showBackArrow, showNotification}: HeaderProps) => {
  const {colorMode} = useColorMode();
  const navigation = useNavigation();

  const color = colorMode === 'light' ? 'black' : 'white';
  const barStyle = colorMode === 'light' ? 'dark-content' : 'light-content';

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        hidden={false}
        barStyle={barStyle}
      />
      <Box
        pb="2"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        {showBackArrow ? (
          <Pressable onPress={() => navigation.goBack()} p="2" pl="0">
            <BackIcon color={color} />
          </Pressable>
        ) : null}
        {showNotification ? (
          <Pressable onPress={() => navigation.goBack()} p="2" pr="0">
            <BellIcon isActive={false} color={color} />
          </Pressable>
        ) : null}
      </Box>
    </>
  );
};

HeaderContainer.defaultProps = {dark: true};

export default HeaderContainer;
