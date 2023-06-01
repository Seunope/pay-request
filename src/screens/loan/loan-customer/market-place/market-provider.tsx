import React from 'react';
import {Text, ZStack, HStack, useColorMode, Box, Center} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../../../../components/AppContainer';
import PBackground from '../../../../assets/loan/provider/p-background';
import NavigationBar from '../../../../components/NavigationBar';
import NavTitleBar from '../../../../components/NavTitleBar';
import {StatusBar} from 'react-native';

export default () => {
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
      <Box
        safeArea
        _dark={{
          bgColor: 'black.100',
        }}>
        <ZStack alignItems="flex-start">
          <PBackground />
        </ZStack>
        <Box p="4">
          <NavigationBar showNotification={false} showBackArrow={true} />

          <Center>
            <Text mt="10" fontWeight="300" fontSize="3xl">
              Gbedebo & Sons
            </Text>
            <Text mb="4">location: Lagos, Nigeria</Text>
          </Center>
        </Box>

        <Box
          bg="white.90"
          p="2"
          borderTopRadius={20}
          _dark={{
            bgColor: 'black.100',
          }}>
          <Center mt="4">
            <Text fontSize="sm" color="gray.100">
              Loan investment portfolio
            </Text>
            <Text fontSize="2xl" p="2" fontWeight="300" color="blue.100">
              ₦405,000
            </Text>
          </Center>
          <HStack justifyContent="space-between" p="2" mt="2">
            <Text fontWeight="200">Loan Applications</Text>
            <Text mr="2"> 50</Text>
          </HStack>
          <HStack justifyContent="space-between" p="2">
            <Text fontWeight="200"> Completed Loans</Text>
            <Text mr="2"> 50</Text>
          </HStack>
          <HStack justifyContent="space-between" p="2">
            <Text fontWeight="200"> Loan Products</Text>
            <Text mr="2"> 50</Text>
          </HStack>

          <HStack justifyContent="space-between" p="2">
            <Text fontWeight="200"> Rating</Text>
            <Text mr="2"> 6.5</Text>
          </HStack>
        </Box>
      </Box>
    </>
  );
};
