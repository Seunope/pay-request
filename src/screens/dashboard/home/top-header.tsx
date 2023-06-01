import {StatusBar} from 'react-native';
import BellIcon from '../../../assets/bell';
import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect, useContext} from 'react';
import AppStorage from '../../../config/services/AppStorage';
import {AppStateContext} from '../../../config/utils/context/app_state';
import {Text, Avatar, HStack, Box, Pressable, useColorMode} from 'native-base';

interface Props {
  padding?: string;
}

const HeaderBar: React.FC<Props> = ({padding}) => {
  const navigation = useNavigation();
  const {colorMode} = useColorMode();
  const [username, setUsername] = useState('');
  const [image, setImage] = useState<any>(null);
  const {contextValue, updateContext} = useContext(AppStateContext);

  useEffect(() => {
    usernameData();
  }, []);

  const usernameData = async () => {
    var user = await AppStorage.getData('user');
    var vStatus = await AppStorage.getData('vStatus');

    if (user) {
      user.image ? setImage(user.image) : null;
      setUsername(user.firstName + ' ' + user.lastName);
      contextValue.user = user;
      if (vStatus) {
        contextValue.vStatus = vStatus;
      }
      updateContext(contextValue);
    }
  };

  const color = colorMode === 'light' ? 'black' : 'white';
  const barStyle = colorMode === 'light' ? 'dark-content' : 'light-content';

  return (
    <HStack justifyContent="space-between" p={padding ? padding : 4} pb="0">
      <StatusBar
        translucent
        backgroundColor="transparent"
        hidden={false}
        barStyle={barStyle}
      />
      <HStack flex="1" justifyContent="space-between">
        <HStack>
          <Avatar
            bg="blue.100"
            mr="2.5"
            source={{
              uri: image,
            }}>
            {username ? username.charAt(0) : 'G'}
          </Avatar>

          <Box>
            <HStack space={2}>
              <Text color="gray.100">Hello,</Text>
            </HStack>

            <Text fontSize="md" fontWeight={300} fontFamily="heading">
              {username ? username : null}
            </Text>
          </Box>
        </HStack>

        <Pressable onPress={() => navigation.goBack()}>
          <BellIcon isActive={false} color={color} />
        </Pressable>
      </HStack>
    </HStack>
  );
};
export default HeaderBar;
