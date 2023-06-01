import React from 'react';
import Welcome from '../screens/welcome';
// import AuthStack from './auth';
// import MoreStack from './more';
// import LoanStack from './loan';
// import BillerStack from './biller';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {useColorMode} from 'native-base';
// import DashboardTab from './dashboard';
import OnBoard from '../screens/auth/onboard';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStateProvider} from '../config/utils/context/app_state';

type RootStackParamList = {
  // OnBoard: undefined;
  // AjoStack: undefined;
  // LoanStack: undefined;
  // AuthStack: undefined;
  Welcome: undefined;
  MoreStack: undefined;
  // BillerStack: undefined;
  // DashboardTab: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator initialRouteName="Welcome">
      <RootStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />

      {/* <RootStack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{
          headerShown: false,
        }}
      /> */}
    </RootStack.Navigator>
  );
};

export default ({...props}) => {
  const {colorMode} = useColorMode();

  return (
    <AppStateProvider>
      <NavigationContainer
        theme={colorMode === 'dark' ? DarkTheme : DefaultTheme}>
        <RootStackScreen isLogin={props.isLogin} />
      </NavigationContainer>
    </AppStateProvider>
  );
};
