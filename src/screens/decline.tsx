import React, {useState} from 'react';
import Button from '../components/Button';
import StatusModal from '../components/StatusModal';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../components/AppContainer';
import {Box, HStack, VStack, TextArea, Avatar, Text} from 'native-base';

export default () => {
  const navigation = useNavigation<any>();
  const [requestStatus, setRequestStatus] = useState<boolean>(false);

  return requestStatus ? (
    <StatusModal isSuccess={false} message="Declined" />
  ) : (
    <AppContainer
      scrollAble={true}
      showBack={true}
      backGroundIsWhite={true}
      headerTxt="Decline this request?">
      <Text textAlign="center" my="6" fontSize="sm" color="blue.100">
        We'll email Shola Ajayi letting them know you decline their request for
        money
      </Text>

      <HStack space="4" bg="gray.70" p="4" borderRadius="6">
        <Avatar
          size="xl"
          bg="blue.100"
          mr="2.5"
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
          }}>
          {/* {username.charAt(0)} */} H
        </Avatar>

        <VStack>
          <Text
            fontSize="md"
            my="2"
            color="blue.90"
            fontWeight={300}
            fontFamily="heading">
            Shola Ajayi
          </Text>
          <Text fontSize="xs" color="gray.100" mb="1">
            +432 123 123 1234
          </Text>
          <Text fontSize="xs" color="gray.100" mb="1">
            peterfajemisin@gmail.com
          </Text>
        </VStack>
      </HStack>

      <Box mt="4">
        <Text
          textAlign="center"
          fontSize="md"
          color="blue.100"
          fontWeight="400">
          £70.00
        </Text>
        <Text textAlign="center" mb="6" fontSize="xs" color="blue.100">
          Request - Kindly send me some money...
        </Text>
      </Box>

      <Text textAlign="center" color="blue.100" fontWeight="300">
        Let Shola know the reason for declining (Optional)
      </Text>

      <TextArea
        h={20}
        w="100%"
        mb="4"
        // onChangeText={text => setDescription(text)}
        returnKeyType="send"
      />
      <Button btnTxt="Decline" onPress={() => setRequestStatus(true)} />
      <Text mt="8" />
    </AppContainer>
  );
};
