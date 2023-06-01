import React from 'react';
import colors from '../config/utils/colors';
import ChangePin from '../screens/more/change-pin';
import {createStackNavigator} from '@react-navigation/stack';
import ChangePassword from '../screens/more/change-password';

export type MoreStackParams = {
  // Faq: undefined;
  // Profile: undefined;
  // TermOfUse: undefined;
  // DebitCards: undefined;
  // Beneficiary: undefined;
  ChangePin: undefined;
  ChangePassword: undefined;
  // Notification: undefined;
};

const MoreStack = createStackNavigator<MoreStackParams>();
export default () => (
  <MoreStack.Navigator
    initialRouteName="ChangePin"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      cardOverlayEnabled: true,
      cardStyle: {backgroundColor: 'transparent'},
    }}>
    <MoreStack.Screen
      name="ChangePassword"
      component={ChangePassword}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    <MoreStack.Screen
      name="ChangePin"
      component={ChangePin}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />
  </MoreStack.Navigator>
);
