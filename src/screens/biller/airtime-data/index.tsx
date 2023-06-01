import MobileData from './data-bundle';
import MobileAirTime from './airtime';
import React, {useState} from 'react';
import {Box, useColorMode} from 'native-base';
import colors from '../../../config/utils/colors';
import NavTitleBar from '../../../components/NavTitleBar';
import NavigationBar from '../../../components/NavigationBar';
import {Text, useWindowDimensions, StatusBar} from 'react-native';

import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

const MobileDataRoute = () => <MobileData />;
const MobileAirtimeRoute = () => <MobileAirTime />;

const renderScene = SceneMap({
  first: MobileDataRoute,
  second: MobileAirtimeRoute,
});

const AirtimeAndData = () => {
  const {colorMode} = useColorMode();
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();

  const isDarkMode = colorMode === 'light' ? false : true;
  const barStyle = colorMode === 'light' ? 'dark-content' : 'light-content';

  const [routes] = useState([
    {key: 'first', title: 'Airtime'},
    {key: 'second', title: 'Data'},
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      renderLabel={({route}) => (
        <Text
          style={
            isDarkMode ? {color: colors.white[90]} : {color: colors.black[100]}
          }>
          {route.title}
        </Text>
      )}
      indicatorStyle={{backgroundColor: colors.blue[80]}}
      style={
        isDarkMode
          ? {backgroundColor: colors.black[90]}
          : {backgroundColor: colors.white[100]}
      }
    />
  );

  return (
    <Box flex="1" safeArea p="5" bgColor="white.100" _dark={{bg: 'black.100'}}>
      <NavigationBar showNotification={false} showBackArrow={true} />
      <NavTitleBar
        hasHeader={true}
        headerTxt="Refill Device"
        subHeaderTxt="Access the cheapest airtime and data bundles for your mobile devices"
      />
      <StatusBar
        translucent
        backgroundColor="transparent"
        hidden={false}
        barStyle={barStyle}
      />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </Box>
  );
};

export default AirtimeAndData;
