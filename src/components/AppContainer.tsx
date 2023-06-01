import React, {useEffect} from 'react';
import NavigationBar from './NavigationBar';
import Utility from '../config/utils/utils';
// import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/core';
import {StackActions} from '@react-navigation/native';
import {VStack, Stack, Box, ScrollView} from 'native-base';

interface Props {
  space?: number;
  padding?: string;
  headerTxt: string;
  hasHeader?: boolean;
  showBack?: boolean;
  showNotify?: boolean;
  scrollAble?: boolean;
  subHeaderTxt?: string;
  isDashboard?: boolean;
  checkSession?: boolean;
  children: React.ReactNode;
  backGroundIsWhite: boolean;
}

const AppContainer: React.FC<Props> = ({
  space,
  padding,
  children,
  headerTxt,
  scrollAble,
  backGroundIsWhite,
  showBack = true,
  hasHeader = true,
  isDashboard = false,
}) => {
  const navigation = useNavigation();

  return (
    <Box
      flex={1}
      p={padding ? padding : '4'}
      bgColor={backGroundIsWhite ? 'white.100' : 'blue.50'}
      _dark={{
        bgColor: 'black.100',
      }}
      safeArea>
      <NavigationBar
        headerTxt={headerTxt}
        showBackArrow={showBack}
      />

      {scrollAble ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={space ? space : 4}>{children}</VStack>
        </ScrollView>
      ) : (
        <VStack space={space ? space : 4}>{children}</VStack>
      )}
    </Box>
  );
};
export default AppContainer;
