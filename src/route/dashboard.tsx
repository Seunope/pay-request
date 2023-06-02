/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'native-base';
import colors from '../config/utils/colors';
import HomeIcon from '../assets/nav-bottom/home';
import ReferIcon from '../assets/nav-bottom/refer';
import Notification from '../screens/notification';
import {TouchableOpacity, View} from 'react-native';
import SettingsIcon from '../assets/nav-bottom/setting';
import BeneficiaryIcon from '../assets/nav-bottom/beneficiary';
import ActivitiesIcon from '../assets/nav-bottom/activities';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type DashboardStackParams = {
  Home: undefined;
  Refer: undefined;
  Settings: undefined;
  Activities: undefined;
  Beneficiary: undefined;
};

const AppTabs = createBottomTabNavigator<DashboardStackParams>();

const CustomHomeButtom = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -15,
      marginLeft: 30,
      marginRight: 30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View>{children}</View>
  </TouchableOpacity>
);

const CustomHomeText = (focused: boolean) => (
  <View
    style={{
      marginBottom: 2,
    }}>
    <HomeIcon />
    <Text
      color={focused ? colors.blue[70] : colors.gray[100]}
      top="-4"
      textAlign="center"
      fontSize="2xs">
      Home
    </Text>
  </View>
);

export default () => {
  return (
    <AppTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.blue[70],
        tabBarInactiveTintColor: colors.gray[100],
      }}>
      <AppTabs.Screen
        name="Activities"
        component={Notification}
        options={{
          headerTitle: '',
          headerTransparent: true,
          tabBarIcon: () => <ActivitiesIcon />,
        }}
      />

      <AppTabs.Screen
        name="Beneficiary"
        component={Notification}
        options={{
          headerTitle: '',
          headerTransparent: true,
          tabBarIcon: () => <BeneficiaryIcon />,
        }}
      />

      <AppTabs.Screen
        name="Home"
        component={Notification}
        options={{
          headerTitle: '',
          headerTransparent: true,
          tabBarIcon: ({focused}) => <CustomHomeText focused={focused} />,
          tabBarButton: props => <CustomHomeButtom {...props} />,
        }}
      />
      <AppTabs.Screen
        name="Refer"
        component={Notification}
        options={{
          headerTitle: '',
          headerTransparent: true,
          tabBarIcon: () => <ReferIcon />,
        }}
      />
      <AppTabs.Screen
        name="Settings"
        component={Notification}
        options={{
          headerTitle: '',
          headerTransparent: true,
          tabBarIcon: () => <SettingsIcon />,
        }}
      />
    </AppTabs.Navigator>
  );
};
