import {Text, Center} from 'native-base';
import React from 'react';
import Button from '../../../../components/Button';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../../../../components/AppContainer';
import SuccessShield from '../../../../assets/loan/customer/success-shield';

export default () => {
  const navigation = useNavigation();

  return (
    <AppContainer scrollAble={false}>
      <Center p="2">
        <SuccessShield />
        <Text color="blue.90" m="4" fontSize="2xl" fontWeight="300">
          Congratulation!
        </Text>
        <Text color="blue.100" textAlign="center" mb="4">
          You have successfully applied for a loan of ₦150,000 at 15% interest
          rate.
        </Text>

        <Text m="2" color="red.100" textAlign="center" fontSize="2xs">
          We have notified the loan provider (Gbedo loans) of your request. A
          response will be sent shortly (average time 3-4 hours).
        </Text>
      </Center>

      <Button
        btnTxt="Continue"
        marginTop="5"
        btnType="primary"
        onPress={() => navigation.navigate('DashboardStack')}
      />
    </AppContainer>
  );
};
