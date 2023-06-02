import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import DashboardTab from './dashboard';
import Payment from '../screens/payment';
import {useColorMode} from 'native-base';
import Decline from '../screens/decline';
import Notification from '../screens/notification';
import RequestDetails from '../screens/request/index';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStateProvider} from '../config/utils/context/app_state';

type RootStackParamList = {
  Payment: undefined;
  Decline: undefined;
  Notification: undefined;
  RequestDetails: undefined;
  DashboardTab: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator initialRouteName="DashboardTab">
      <RootStack.Screen
        name="DashboardTab"
        component={DashboardTab}
        options={{
          headerShown: false,
        }}
      />
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
        name="Decline"
        component={Decline}
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
