import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, Box, HStack, VStack} from 'native-base';
import Button from '../../../../components/DynamicButton';
import AppContainer from '../../../../components/AppContainer';

export default () => {
  const navigation = useNavigation();
  const [tenure, setTenure] = useState<number>();
  const [amount, setAmount] = useState<number>();
  const [purpose, setPurpose] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AppContainer
      scrollAble={true}
      headerTxt="Loan Summary"
      subHeaderTxt="Loan break down">
      <Box borderWidth="1" borderRadius="7" borderColor="gray.90" p="4">
        <HStack justifyContent="space-between">
          <VStack width="65%">
            <Text fontSize="2xs">Amount</Text>
            <Text fontWeight="200" fontSize="md">
              ₦150,000
            </Text>
          </VStack>
          <VStack width="35%">
            <Text fontSize="2xs">Duration</Text>
            <Text fontWeight="200">60 days</Text>
          </VStack>
        </HStack>

        <HStack justifyContent="space-between" mt="2">
          <VStack width="65%">
            <Text fontSize="2xs">Next Repayment</Text>
            <Text fontWeight="200" fontSize="md">
              ₦150,000
            </Text>
          </VStack>
          <VStack width="35%">
            <Text fontSize="2xs">Payment start date</Text>
            <Text fontWeight="200">30-06-2013</Text>
          </VStack>
        </HStack>

        <HStack justifyContent="space-between" mt="2">
          <VStack width="65%">
            <Text fontSize="2xs">Interest</Text>
            <Text fontWeight="200" fontSize="md">
              7%
            </Text>
          </VStack>
          <VStack width="35%">
            <Text fontSize="2xs">Completion Date</Text>
            <Text fontWeight="200">30-11-2013</Text>
          </VStack>
        </HStack>
      </Box>

      <Text>Repayment Plan</Text>

      <Box borderWidth="1" borderRadius="7" borderColor="gray.90" p="4">
        <HStack justifyContent="space-between">
          <Text fontSize="xs">Month 1</Text>
          <Text fontWeight="200">30-11-2013</Text>
          <Text fontWeight="200" fontSize="xs">
            ₦15,000
          </Text>
        </HStack>

        <HStack justifyContent="space-between" mt="2">
          <Text fontSize="xs">Month 2</Text>
          <Text fontWeight="200">30-11-2013</Text>
          <Text fontWeight="200" fontSize="xs">
            ₦15,000
          </Text>
        </HStack>

        <HStack justifyContent="space-between" mt="2">
          <Text fontSize="xs">Month 3</Text>
          <Text fontWeight="200">30-11-2013</Text>
          <Text fontWeight="200" fontSize="xs">
            ₦15,000
          </Text>
        </HStack>
      </Box>

      <Text fontSize="2xs">
        By clicking “Continue”, I consent to apply for loan hence we may obtain
        information from relevant third parties as may be necessary, on my
        employment details, salary payment, loans and other related data, to
        make a decision on my loan application. I also consent to the loan
        amounts being deducted from my salary at source before credit to my
        account and any outstanding loans being recovered automatically from any
        other accounts linked to me in the case of default
      </Text>

      <Button
        btnTxt="Take Loan"
        marginTop="5"
        btnType="primary"
        // onPress={doSubmit}
        loading={loading}
        onPress={() => navigation.navigate('LoanStack', {screen: 'ListCards'})}
        fieldStatus={true}
      />

      <Text
        color="red.100"
        textAlign="center"
        onPress={() => navigation.navigate('DashboardStack')}>
        I don't want this offer
      </Text>
    </AppContainer>
  );
};
