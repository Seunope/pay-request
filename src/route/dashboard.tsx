import React from 'react';
import colors from '../config/utils/colors';
import AjoIcon from '../assets/nav-bottom/ajo';
import ActivitiesIcon from '../assets/nav-bottom/activities';
import HomeIcon from '../assets/nav-bottom/home';
import MoreIcon from '../assets/nav-bottom/more';
import Notification from '../screens/notification';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type DashboardStackParams = {
  LoanBoard: undefined;
  AjoBoard: undefined;
  HomeBoard: undefined;
  MoreBoard: undefined;
  Notification: undefined;
  RecoveryBoard: undefined;
  ProviderBoard: undefined;
};

// const vStack = {};
const AppTabs = createBottomTabNavigator<DashboardStackParams>();

export default () => {
  return (
    <AppTabs.Navigator
      drawerType="slide"
      screenOptions={{
        // headerShown: false,
        tabBarActiveTintColor: colors.blue[70],
        tabBarInactiveTintColor: colors.gray[100],
      }}>
      <AppTabs.Screen
        name="Activities"
        component={Notification}
        options={{
          headerTitle: '',
          headerTransparent: true,
          tabBarIcon: ({color, size}) => (
            <ActivitiesIcon color={color} size={size} />
          ),
        }}
      />

      <AppTabs.Screen
        name="Beneficiary"
        component={Notification}
        options={{
          headerTitle: '',
          headerTransparent: true,
          tabBarIcon: ({color, size}) => <AjoIcon color={color} size={size} />,
        }}
      />

      <AppTabs.Screen
        name="Home"
        component={Notification}
        options={{
          headerTitle: '',
          headerTransparent: true,
          tabBarIcon: ({color, size}) => <MoreIcon color={color} size={size} />,
        }}
      />
      <AppTabs.Screen
        name="Refer a friend"
        component={Notification}
        options={{
          headerTitle: '',
          headerTransparent: true,
          tabBarIcon: ({color, size}) => <MoreIcon color={color} size={size} />,
        }}
      />
      <AppTabs.Screen
        name="Settings"
        component={Notification}
        options={{
          headerTitle: '',
          headerTransparent: true,
          tabBarIcon: ({color, size}) => <MoreIcon color={color} size={size} />,
        }}
      />
    </AppTabs.Navigator>
  );
};
