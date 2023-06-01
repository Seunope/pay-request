import React, {useState, useEffect} from 'react';
import InputBar from '../../../components/InputBar';
import ContactIcon from '../../../assets/biller/contact';
import DynamicButton from '../../../components/DynamicButton';
import MtnIcon from '../../../assets/biller/airtime-data/mtn';
import GloIcon from '../../../assets/biller/airtime-data/glo';
import {selectContactPhone} from 'react-native-select-contact';
import {Keyboard, PermissionsAndroid, Platform} from 'react-native';
import AirtelIcon from '../../../assets/biller/airtime-data/airtel';
import NineMobileIcon from '../../../assets/biller/airtime-data/9mobile';
import {VStack, Pressable, Input, Icon, Text, HStack, Box} from 'native-base';

const MobileData = () => {
  // const navigation = useNavigation();
  const [amount, setAmount] = useState<number>();
  const [telephone, setTelephone] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const doSelectContact = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'Groupay needs your permission to read contacts',
        },
      );
      if (
        granted.toString() === 'never_ask_again' ||
        granted.toString() === 'denied'
      ) {
        return;
      }
    }

    return selectContactPhone().then(selection => {
      if (!selection) {
        return null;
      }
      console.log(selection);
      let {contact, selectedPhone} = selection;
      setTelephone(selectedPhone.number);
      console.log(
        `Selected ${selectedPhone.type} phone number ${selectedPhone.number} from ${contact.name}`,
      );
      return selectedPhone.number;
    });
  };

  const doSubmit = async () => {
    // let msg = null;
    // Keyboard.dismiss();

    // if (pin.length < 4) {
    //   msg = 'Pin can not be less than 4 digits';
    //   setErrorMessage(msg);
    //   return;
    // }

    return;
  };

  return (
    <VStack space="4" pt="6">
      <Text fontSize="xs" color="blue.100">
        Select network provider
      </Text>

      <HStack justifyContent="space-between">
        <Box
          p="2"
          shadow={5}
          bg="white.100"
          borderRadius="5"
          _dark={{bg: 'black.90'}}>
          <AirtelIcon />
        </Box>
        <Box
          p="2"
          shadow={5}
          bg="white.100"
          borderRadius="5"
          _dark={{bg: 'black.90'}}>
          <MtnIcon />
        </Box>
        <Box
          p="2"
          shadow={5}
          bg="white.100"
          borderRadius="5"
          _dark={{bg: 'black.90'}}>
          <GloIcon />
        </Box>
        <Box
          p="2"
          shadow={5}
          bg="white.100"
          borderRadius="5"
          _dark={{bg: 'black.90'}}>
          <NineMobileIcon />
        </Box>
      </HStack>

      <Text fontWeight="300" style={{marginBottom: -15}}>
        Mobile Number
      </Text>
      <Input
        value={telephone.replace(/ /g, '')}
        keyboardType="number-pad"
        placeholder="Mobile number"
        onChangeText={itemValue => setTelephone(itemValue)}
        InputRightElement={
          <Pressable onPress={doSelectContact}>
            <Icon as={<ContactIcon />} size={5} mr="2" color="muted.400" />
          </Pressable>
        }
      />
      <InputBar
        maxLength={11}
        label="Amount"
        value={amount}
        keyboardType={'number-pad'}
        placeholder="Enter Amount"
        onChangeText={text => setAmount(text)}
      />

      <DynamicButton
        btnTxt="Submit"
        btnType="primary"
        // onPress={doSubmit}
        loading={loading}
        // onPress={() => navigation.navigate('AuthStack', {screen: 'OtpVerify'})}
        fieldStatus={telephone && amount ? true : false}
      />
    </VStack>
  );
};

export default MobileData;
