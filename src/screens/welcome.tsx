import React from 'react';
import {Text} from 'native-base';
import AppContainer from '../components/AppContainer';


export default () => {
  // const navigation = useNavigation<any>();


  return (
    <AppContainer
      scrollAble={false}
      checkSession={false}
      headerTxt="Hey! There"
      subHeaderTxt="Login to your account">
        <Text>Welcome on board</Text>
    </AppContainer>
  );
};
