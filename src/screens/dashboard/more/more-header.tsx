import {
  Box,
  Text,
  Button,
  Avatar,
  HStack,
  Heading,
  useColorMode,
} from 'native-base';
import {StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import AppStorage from '../../../config/services/AppStorage';

const HeaderBar = () => {
  const navigation = useNavigation();
  const {colorMode} = useColorMode();
  const [image, setImage] = useState<any>(null);
  const [userData, setUserData] = useState<any>();
  const [username, setUsername] = useState<any>('');

  useEffect(() => {
    usernameData();
  }, []);

  const usernameData = async () => {
    var user = await AppStorage.getData('user');
    if (user) {
      setUserData(user);
      user.image ? setImage(user.image) : null;
      setUsername(user.firstName + ' ' + user.lastName);
    }
  };

  const barStyle = colorMode === 'light' ? 'dark-content' : 'light-content';

  return (
    <Box>
      <StatusBar
        translucent
        backgroundColor="transparent"
        hidden={false}
        barStyle={barStyle}
      />
      <Heading mt="4" mb="6" fontSize="2xl" fontWeight={300} color="blue[100]">
        More
      </Heading>
      <HStack justifyContent="space-between">
        <Avatar
          size="sm"
          bg="blue.100"
          mr="2.5"
          source={{
            uri: image,
          }}>
          {username.charAt(0)}
        </Avatar>

        <Button
          size="xs"
          p="0"
          bgColor="green.90"
          _text={{
            px: '4',
            py: '0',
          }}>
          Edit Profile
        </Button>
      </HStack>
      <Text fontSize="md" mt="2" fontWeight={300} fontFamily="heading">
        {username ? username : null}
      </Text>
      <Text fontSize="sm">{userData?.email}</Text>
      <Text fontSize="xs">0{userData?.phoneNumber.substring(3)}</Text>
    </Box>
  );
};
export default HeaderBar;
