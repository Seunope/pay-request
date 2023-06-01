import React, {useEffect} from 'react';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/core';
import EmptyData from '../../../../components/EmptyData';
import LoadingState from '../../../../components/Skeleton';
import Toasts from '../../../../config/services/toast/Toast';
import AppContainer from '../../../../components/AppContainer';
import TaskEnd from '../../../../assets/loan/customer/task-end';
import AppStorage from '../../../../config/services/AppStorage';
import {Text, HStack, VStack, Pressable, Center} from 'native-base';
import TaskStart from '../../../../assets/loan/customer/task-start';
import {onError, onSuccess} from '../../../../config/api/http-mthd';
import TaskMiddle from '../../../../assets/loan/customer/task-middle';
import {useGetVerificationStatus} from '../../../../config/hooks/useUser';

export default () => {
  const navigation = useNavigation<any>();
  const {data, error, refetch, isLoading, isFetching, isError} =
    useGetVerificationStatus();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch();
    });
    return unsubscribe;
  }, [navigation, refetch]);

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);
    return <EmptyData onRetry={refetch} />;
  }

  if (isLoading || isFetching) {
    return <LoadingState type="4" />;
  }

  if (data) {
    const res = onSuccess(data);
    console.log('res.data.', res);
    AppStorage.saveData('vStatus', res);
  }

  const manageOnPress = (isVerified: boolean, routeName: string) => {
    if (isVerified) {
      Toast.show('Already Verified!', Toast.LONG);
    } else {
      navigation.navigate('LoanStack', {screen: routeName});
    }
  };

  return (
    <AppContainer
      space={1}
      scrollAble={true}
      headerTxt="Identity Verification"
      subHeaderTxt="To prevent identity theft, please verify the following personal information.">
      <HStack space="3">
        <Center>
          <TaskStart isActive={data?.hasPersonInfo} />
        </Center>
        <Pressable
          onPress={() => manageOnPress(data?.hasPersonInfo, 'PersonalInfo')}>
          <VStack mt="2">
            <Text fontWeight="200" fontSize="md">
              Personal Information
            </Text>
            <Text fontSize="xs" color="gray.100">
              Must match information as shown on ID.
            </Text>
          </VStack>
        </Pressable>
      </HStack>

      <HStack space="3">
        <Center>
          <TaskMiddle isActive={data?.isPhoneNumberVerified} />
        </Center>
        <Pressable
          onPress={() =>
            manageOnPress(data?.isPhoneNumberVerified, 'VerifyPhoneNumber')
          }>
          <VStack mt="2">
            <Text fontWeight="200" fontSize="md">
              Verify your Phone Number
            </Text>
            <Text fontSize="xs" color="gray.100">
              OTP verification of your phone number
            </Text>
          </VStack>
        </Pressable>
      </HStack>

      <HStack space="3">
        <Center>
          <TaskMiddle isActive={data?.isBVNVerified} />
        </Center>
        <Pressable onPress={() => manageOnPress(data?.isBVNVerified, 'BVN')}>
          <VStack mt="2">
            <Text fontWeight="200" fontSize="md">
              Verify BVN
            </Text>
            <Text fontSize="xs" color="gray.100">
              Enter your 11 digits BVN
            </Text>
          </VStack>
        </Pressable>
      </HStack>

      <HStack space="3">
        <Center>
          <TaskMiddle isActive={data?.hasFaceId} />
        </Center>
        <Pressable onPress={() => manageOnPress(data?.hasFaceId, 'FaceID')}>
          <VStack mt="2">
            <Text fontWeight="200" fontSize="md">
              Face ID
            </Text>
            <Text fontSize="xs" color="gray.100">
              Take a selfie
            </Text>
          </VStack>
        </Pressable>
      </HStack>

      <HStack space="3">
        <Center>
          <TaskMiddle isActive={data?.hasGuarantor} />
        </Center>
        <Pressable
          onPress={() => manageOnPress(data?.hasGuarantor, 'Guarantor')}>
          <VStack mt="2">
            <Text fontWeight="200" fontSize="md">
              Guarantor
            </Text>
            <Text fontSize="xs" color="gray.100">
              Add friends we can reach in case you default
            </Text>
          </VStack>
        </Pressable>
      </HStack>

      <HStack space="3">
        <Center>
          <TaskMiddle isActive={data?.hasEmployment} />
        </Center>
        <Pressable
          onPress={() => manageOnPress(data?.hasEmployment, 'Employment')}>
          <VStack mt="2">
            <Text fontWeight="200" fontSize="md">
              Employment Record
            </Text>
            <Text fontSize="xs" color="gray.100">
              Let know your employment status
            </Text>
          </VStack>
        </Pressable>
      </HStack>

      <HStack space="3">
        <Center>
          <TaskEnd isActive={data?.hasNationalId} />
        </Center>
        <Pressable
          onPress={() => manageOnPress(data?.hasNationalId, 'PhotoOfID')}>
          <VStack mt="2">
            <Text fontWeight="200" fontSize="md">
              Photo ID
            </Text>
            <Text fontSize="xs" color="gray.100">
              Take a snap shot of your national ID
            </Text>
          </VStack>
        </Pressable>
      </HStack>
    </AppContainer>
  );
};
