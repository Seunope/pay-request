import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, Box, VStack, Checkbox} from 'native-base';
import Button from '../../../../components/DynamicButton';
import AppContainer from '../../../../components/AppContainer';

export default () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <AppContainer
      scrollAble={true}
      headerTxt="Terms & Conditions"
      subHeaderTxt="You are applying for a sum of N340,000. Please read careful, to understand the requirements">
      <Box p="2" pt="0">
        <Text fontWeight="300" mt="2">
          Welcome to Groupay
        </Text>
        <Text fontSize="xs" color="gray.100">
          Groupay is a product of MassTeck. In an attempt to provide a level
          playing field for both the loan provider and our loan customer please
          take note of the following
        </Text>

        <Text fontWeight="300" mt="4" color="green.90">
          Timely Payment
        </Text>
        <Text fontSize="xs" mt="2">
          1. Paying before due date guarantee an increase in your next loan
          amount
        </Text>
        <Text fontSize="xs" mt="2">
          2. Timely payment will increase your credit point with us
        </Text>
        <Text fontSize="xs" mt="2">
          3. Payments are spread over months for monthly loans
        </Text>
        <Text fontSize="xs" mt="2">
          4. A discounts of 50% return of processing fees for repaying loans
          before due date
        </Text>

        <Text fontWeight="300" mt="4" color="red.100">
          Late Payment
        </Text>
        <Text fontSize="xs" mt="2">
          1. Automatic debit happens on your account
        </Text>
        <Text fontSize="xs" mt="2">
          2. You accurred default charge for each day as set by the loan
          provider
        </Text>
        <Text fontSize="xs" mt="2">
          3. You will be reported to Nigeria Credit Bureaus
        </Text>
        <Text fontSize="xs" mt="2">
          4. We might notify users on your contact list
        </Text>
      </Box>

      <VStack width="95%" mt="2">
        <Checkbox checked={isChecked} onPress={toggleCheckBox}>
          <Text pr="1" fontSize="xs" fontWeight="200">
            I agree to this terms and conditions
          </Text>
        </Checkbox>
      </VStack>

      <Button
        btnTxt="Confirm"
        marginTop="5"
        btnType="primary"
        // onPress={doSubmit}
        // loading={loading}
        onPress={() =>
          navigation.navigate('LoanStack', {screen: 'LoanSuccess'})
        }
        fieldStatus={isChecked ? true : false}
      />
    </AppContainer>
  );
};
