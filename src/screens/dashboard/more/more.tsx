import TopHeaderBar from './more-header';
import HowAjoWorks from './how-ajo-works';
import React, {useState, useRef} from 'react';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/core';
import PadlockIcon from '../../../assets/more/padlock';
import AppContainer from '../../../components/AppContainer';
import {
  Text,
  HStack,
  VStack,
  Pressable,
  Switch,
  Actionsheet,
  Box,
  Button,
  AlertDialog,
  useDisclose,
  useColorMode,
  useColorModeValue,
  ChevronRightIcon,
} from 'native-base';
import AppStorage from '../../../config/services/AppStorage';

export default () => {
  const navigation = useNavigation();
  const {toggleColorMode} = useColorMode();
  const {isOpen, onOpen, onClose} = useDisclose();
  const [showAjoHow, setShowAjoHow] = useState(false);
  const themeType = useColorModeValue('light', 'dark');
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggleLogoOut = () => setIsOpenModal(!isOpenModal);
  const cancelRef = useRef(null);

  const toggleModal = () => {
    setShowAjoHow(!showAjoHow);
  };

  const doLogout = async () => {
    await AppStorage.deleteData('token');
    await AppStorage.deleteData('expireAt');
    // await AppStorage.deleteData('contactSavedAt';
    Toast.show('Bye! We will miss you.😞 Please come back', Toast.LONG);
    navigation.reset({
      index: 0,
      routes: [{name: 'OnBoard'}],
    });
    return;
  };
  return (
    <AppContainer scrollAble={true} isDashboard={true}>
      <TopHeaderBar />

      <HStack space={3} mb={2}>
        <PadlockIcon />
        <HStack justifyContent="space-between" width="85%">
          <VStack>
            <Text fontWeight={300} fontSize="md">
              Switch Theme
            </Text>
            <Text fontSize="xs" pr="6">
              Change theme to {themeType === 'light' ? 'dark' : 'light'} mode
            </Text>
          </VStack>

          <Switch
            isChecked={themeType === 'light'}
            onToggle={toggleColorMode}
          />
        </HStack>
      </HStack>

      <Pressable onPress={toggleModal}>
        <HStack space={3} mb={2}>
          <PadlockIcon />
          <HStack justifyContent="space-between" width="85%">
            <VStack>
              <Text fontWeight={300} fontSize="md">
                How Groupay works
              </Text>
              <Text fontSize="xs">
                Quick tips on how Groupay Ajo/Thrift works{' '}
              </Text>
            </VStack>
            <ChevronRightIcon />
          </HStack>
        </HStack>
      </Pressable>

      <Pressable
        onPress={() =>
          navigation.navigate('MoreStack', {screen: 'ChangePassword'})
        }>
        <HStack space={3} mb={2}>
          <PadlockIcon />
          <HStack justifyContent="space-between" width="85%">
            <VStack>
              <Text fontWeight={300} fontSize="md">
                Change Password
              </Text>
              <Text fontSize="xs" pr="6">
                Create a new password to access app
              </Text>
            </VStack>

            <ChevronRightIcon />
          </HStack>
        </HStack>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('MoreStack', {screen: 'ChangePin'})}>
        <HStack space={3} mb={2}>
          <PadlockIcon />
          <HStack justifyContent="space-between" width="85%">
            <VStack>
              <Text fontWeight={300} fontSize="md">
                Change PIN
              </Text>
              <Text fontSize="xs" pr="6">
                Set a new PIN for transactions
              </Text>
            </VStack>
            <ChevronRightIcon />
          </HStack>
        </HStack>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('LoanStack', {screen: 'Identity'})}>
        <HStack space={3} mb={2}>
          <PadlockIcon />
          <HStack justifyContent="space-between" width="85%">
            <VStack>
              <Text fontWeight={300} fontSize="md">
                Identity Verification
              </Text>
              <Text fontSize="xs">Verify your identity with us</Text>
            </VStack>

            <ChevronRightIcon />
          </HStack>
        </HStack>
      </Pressable>

      <Pressable onPress={onOpen}>
        <HStack space={3} mb={2}>
          <PadlockIcon />
          <HStack justifyContent="space-between" width="85%">
            <VStack>
              <Text fontWeight={300} fontSize="md">
                Talk to us
              </Text>
              <Text fontSize="xs" pr="6">
                Do you have any complain about our services?
              </Text>
            </VStack>

            <Pressable>
              <ChevronRightIcon />
            </Pressable>
          </HStack>
        </HStack>
      </Pressable>

      <HStack space={3} mb={2}>
        <PadlockIcon />
        <HStack justifyContent="space-between" width="85%">
          <VStack>
            <Text fontWeight={300} fontSize="md">
              Banks and Cards
            </Text>
            <Text fontSize="xs" pr="6">
              View save card and set default card
            </Text>
          </VStack>

          <Pressable>
            <ChevronRightIcon />
          </Pressable>
        </HStack>
      </HStack>

      <Pressable
        onPress={() => navigation.navigate('AjoStack', {screen: 'SyncGroup'})}>
        <HStack space={3} mb={2}>
          <PadlockIcon />
          <HStack justifyContent="space-between" width="85%">
            <VStack>
              <Text fontWeight={300} fontSize="md">
                Sync Ajo/Thrift Group
              </Text>
              <Text fontSize="xs" pr="6">
                Link you thrift groups to the app
              </Text>
            </VStack>

            <ChevronRightIcon />
          </HStack>
        </HStack>
      </Pressable>

      <HStack space={3} mb={2}>
        <PadlockIcon />
        <HStack justifyContent="space-between" width="85%">
          <VStack>
            <Text fontWeight={300} fontSize="md">
              Delete Account
            </Text>
            <Text fontSize="xs" pr="6">
              Remove your data from Groupay
            </Text>
          </VStack>

          <Pressable>
            <ChevronRightIcon />
          </Pressable>
        </HStack>
      </HStack>

      <Pressable onPress={() => toggleLogoOut()}>
        <HStack space={3} mb={2}>
          <PadlockIcon />
          <HStack justifyContent="space-between" width="85%">
            <VStack>
              <Text fontWeight={300} fontSize="md">
                Log out
              </Text>
              <Text fontSize="xs" pr="6">
                Log out from current session
              </Text>
            </VStack>

            <Pressable>
              <ChevronRightIcon />
            </Pressable>
          </HStack>
        </HStack>
      </Pressable>

      {showAjoHow ? <HowAjoWorks /> : null}
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center" my="8">
            <Text
              textAlign="center"
              fontWeight="300"
              mt="8"
              fontSize="xl"
              color="blue.100">
              Talk to Us
            </Text>

            <Text>Send Email</Text>
            <Text mb="4">aloc.mass@gmail.com</Text>

            <Text>Call Support</Text>
            <Text mb="10">07055829257</Text>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpenModal}
        onClose={toggleLogoOut}>
        <AlertDialog.Content>
          <AlertDialog.Body>
            <Text mb="4" textAlign="center">
              Do you want to log out?
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button size="xs" px="0" onPress={toggleLogoOut}>
              No
            </Button>
            <Text px="8" onPress={() => doLogout()}>
              Yes
            </Text>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </AppContainer>
  );
};
