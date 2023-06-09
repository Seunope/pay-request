import React from 'react';
import BackIcon from '../assets/back';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Box, useColorMode, Heading, Pressable} from 'native-base';

interface HeaderProps {
  headerTxt: string;
  showBackArrow?: boolean;
  showNotification?: boolean;
}

const HeaderContainer = ({showBackArrow, headerTxt}: HeaderProps) => {
  const {colorMode} = useColorMode();
  const navigation = useNavigation();

  const barStyle = colorMode === 'light' ? 'dark-content' : 'light-content';

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        hidden={false}
        barStyle={barStyle}
      />
      <Box pb="2" mb="6" flexDirection="row" alignItems="center">
        {showBackArrow ? (
          <Pressable onPress={() => navigation.goBack()} p="2" pl="0">
            <BackIcon />
          </Pressable>
        ) : null}
        <Box flex="1" justifyContent="center">
          <Heading
            mt="2"
            mb="2"
            textAlign="center"
            fontSize="xl"
            fontWeight={400}
            color="blue.100">
            {headerTxt}
          </Heading>
        </Box>
      </Box>
    </>
  );
};

HeaderContainer.defaultProps = {dark: true};

export default HeaderContainer;
