import React from 'react';
import {Text, Box} from 'native-base';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/core';

export default () => {
  const navigation = useNavigation();

  return (
    <Box bg="gray.80" flex="1">
      <Box m="4" p="3" bg="white.100" borderRadius="5">
        <Text fontWeight="300" mt="2" fontSize="md">
          Loan Provider Space
        </Text>
        <Text fontSize="xs" color="gray.100">
          Groupay helps lenders (loan provider) find loan customer. The
          community prevents and trims out the bad eggs forever.
        </Text>

        <Text fontWeight="300" mt="4">
          How it Works
        </Text>
        <Text fontSize="xs" mt="2">
          1. Fund your wallet
        </Text>
        <Text fontSize="xs" mt="2">
          2. Create a loan product (set your prefer tenure, interest rate etc)
        </Text>
        <Text fontSize="xs" mt="2">
          3. Earn from loan, when capital and interest is repaid
        </Text>
        <Text fontSize="xs" mt="2">
          4. Making your loan private implies, you are responsible for getting
          people to take the loan
        </Text>
        <Text fontSize="xs" mt="2">
          5. Making your loan public implies any user on Groupay can apply
        </Text>

        <Text fontWeight="300" mt="4">
          How we Protect your funds
        </Text>
        <Text fontSize="xs" mt="2">
          1. Verification of customer supplied details
        </Text>
        <Text fontSize="xs" mt="2">
          2. AI generate customer loan behaviour
        </Text>
        <Text fontSize="xs" mt="2">
          3. We provider 3 friends of the customer you can call if loan
          applicant default
        </Text>
        <Text fontSize="xs" mt="2">
          4. We link customer card to loan hence, auto debit can be done if
          customer default on loans
        </Text>
        <Text fontSize="xs" mt="2">
          5. Report customer to Nigeria Credit Bureau if user default
        </Text>
        <Text fontSize="xs" mt="2">
          6. We can also debit the account of Groupay user that stands as a
          guarantor to a customer if loan is defaulted
        </Text>

        <Text fontWeight="300" mt="4" color="green.90">
          PLEASE NOTE
        </Text>
        <Text fontSize="2xs" mt="4" color="gray.100">
          Loan business is profitable and equally risky. Groupay ensures that
          only good borrowers get access to loans. Our machine learning
          algorithm makes predictive analysis on each customer. We also provide
          user credit score from Nigeria Credit Bureau where possible. Do your
          due diligence before you give out loans. Groupay is NOT LIABLE if loan
          is defaulted.
        </Text>

        <Button
          btnType="primary"
          btnTxt="Become Loan Provider"
          onPress={() =>
            navigation.navigate('LoanStack', {screen: 'CreateProvider'})
          }
        />
      </Box>
    </Box>
  );
};
