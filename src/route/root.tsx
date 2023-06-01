import React from 'react';
import Payment from '../screens/payment';
import Delcine from '../screens/decline';
import Notification from '../screens/notification';
import RequestDetails from '../screens/requestDetails';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {useColorMode} from 'native-base';
// import DashboardTab from './dashboard';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStateProvider} from '../config/utils/context/app_state';

type RootStackParamList = {
  Payment: undefined;
  Delcine: undefined;
  // LoanStack: undefined;
  // AuthStack: undefined;
  Notification: undefined;
  MoreStack: undefined;
  RequestDetails: undefined;
  // DashboardTab: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator initialRouteName="Delcine">
      <RootStack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="RequestDetails"
        component={RequestDetails}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="Delcine"
        component={Delcine}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default () => {
  const {colorMode} = useColorMode();

  return (
    <AppStateProvider>
      <NavigationContainer
        theme={colorMode === 'dark' ? DarkTheme : DefaultTheme}>
        <RootStackScreen />
      </NavigationContainer>
    </AppStateProvider>
  );
};
