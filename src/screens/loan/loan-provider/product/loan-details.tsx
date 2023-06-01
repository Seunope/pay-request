import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import DaynamicButton from '../../../../components/DynamicButton';
import BadLoan from '../../../../assets/dashboard/provider/bad';
import AppContainer from '../../../../components/AppContainer';
import {Avatar, Box, HStack, Spacer, Text, VStack, Button} from 'native-base';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AppContainer
      // hasHeader={false}
      scrollAble={true}
      headerTxt="Loan Data"
      subHeaderTxt="A break down of user loan behavior">
      <Box py="2" mb="2" bg="blue.20" borderRadius="7" _dark={{bg: 'black.90'}}>
        <HStack space={[2, 3]} justifyContent="space-between">
          <Avatar
            size="60px"
            bg="blue.60"
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}>
            J
          </Avatar>

          <VStack width="100%">
            <HStack justifyContent="space-between" width="80%" pr="2">
              <Text
                color="black.100"
                fontWeight="300"
                _dark={{color: 'gray.90'}}>
                John Doe
              </Text>

              <Text fontSize="xs" color="gray.100">
                34 yrs
              </Text>
            </HStack>

            <Text mb="1" fontSize="xs" color="coolGray.600" fontWeight="200">
              a@gmail.com | 07055829257
            </Text>
            <HStack justifyContent="space-between" width="80%" pr="2">
              <Text mb="1" fontSize="xs" color="gray.100">
                Contact List: 100
              </Text>
              <Text
                mb="1"
                fontSize="xs"
                color="blue.100"
                fontWeight="2 .  . . . 00">
                Lagos, NG
              </Text>
            </HStack>
          </VStack>
          <Spacer />
        </HStack>
      </Box>

      <VStack
        space="2"
        p="4"
        bg="gray.70"
        borderRadius="7"
        _dark={{bg: 'black.90'}}>
        <Text fontWeight="300">Employment Data</Text>

        <HStack space="2">
          <Text fontWeight="200">Job Title:</Text>
          <Text>Software Developer</Text>
        </HStack>

        <HStack space="2">
          <Text fontWeight="200">Employer name:</Text>
          <Text>MaSSive Tech</Text>
        </HStack>

        <HStack space="2">
          <Text fontWeight="200">Industry:</Text>
          <Text>Computer science</Text>
        </HStack>

        <HStack space="2">
          <Text fontWeight="200">Working for:</Text>
          <Text>7 years with MaSSive Tech</Text>
        </HStack>

        <HStack space="2">
          <Text fontWeight="200">Monthly Income:</Text>
          <Text>N45,000</Text>
        </HStack>

        <VStack space="2">
          <Text fontWeight="200">Work Address:</Text>
          <Text>
            10 bUmi street Ketu Pjo Lagos 10 bUmi street Ketu Pjo Lagos
          </Text>
        </VStack>
      </VStack>

      <VStack
        space="2"
        p="4"
        bg="gray.70"
        borderRadius="7"
        _dark={{bg: 'black.90'}}>
        <Text fontWeight="300">AI Credit Analysis</Text>

        <Text>This user has a 50% chance of not repaying back the loan.</Text>
        <HStack space="2">
          <Text fontWeight="200">Groupay Credit Score:</Text>
          <Text>5.7</Text>
        </HStack>
      </VStack>

      <VStack
        space="2"
        p="4"
        bg="gray.70"
        borderRadius="7"
        _dark={{bg: 'black.90'}}>
        <Text fontWeight="300">Credit Registry Data</Text>

        <HStack space="2">
          <Text fontWeight="200">Job Title:</Text>
          <Text>Software Developer</Text>
        </HStack>

        <HStack space="2">
          <Text fontWeight="200">Employer name:</Text>
          <Text>MaSSive Tech</Text>
        </HStack>

        <HStack space="2">
          <Text fontWeight="200">Industry:</Text>
          <Text>Computer science</Text>
        </HStack>

        <HStack space="2">
          <Text fontWeight="200">Working for:</Text>
          <Text>7 years with MaSSive Tech</Text>
        </HStack>

        <HStack space="2">
          <Text fontWeight="200">Monthly Income:</Text>
          <Text>N45,000</Text>
        </HStack>

        <VStack space="2">
          <Text fontWeight="200">Work Address:</Text>
          <Text>
            10 bUmi street Ketu Pjo Lagos 10 bUmi street Ketu Pjo Lagos
          </Text>
        </VStack>
      </VStack>

      <VStack
        space="2"
        p="4"
        bg="gray.70"
        borderRadius="7"
        _dark={{bg: 'black.90'}}>
        <Text fontWeight="300">Repayment Schedule</Text>

        <HStack justifyContent="space-between">
          <Text fontWeight="200">Due Date</Text>
          <Text fontWeight="200">Amount</Text>
          <Text>Status</Text>
        </HStack>

        <HStack justifyContent="space-between">
          <Text>22/01/2023</Text>
          <Text>N3,500</Text>
          <Text>Paid</Text>
        </HStack>

        <HStack justifyContent="space-between">
          <Text>22/01/2023</Text>
          <Text>N3,500</Text>
          <Button
            size="xs"
            p="0"
            _text={{
              px: '2',
              py: '0',
            }}
            onPress={() =>
              navigation.navigate('LoanStack', {
                screen: 'ProviderRecoveryRequest',
              })
            }>
            Recover
          </Button>
        </HStack>

        <HStack justifyContent="space-between">
          <Text>22/01/2023</Text>
          <Text>N3,500</Text>
          <Text>NotDue</Text>
        </HStack>

        <HStack space="2">
          <Button
            size="xs"
            p="0"
            _text={{
              px: '2',
              py: '0',
            }}
            onPress={() =>
              navigation.navigate('LoanStack', {
                screen: 'ProviderRecoveryRequest',
              })
            }>
            Recover All
          </Button>
        </HStack>
      </VStack>

      <VStack
        space="2"
        p="4"
        bg="gray.70"
        borderRadius="7"
        _dark={{bg: 'black.90'}}>
        <Text fontWeight="300">Loan History</Text>

        <HStack space={4} mb="2">
          <BadLoan />

          <VStack width="80%">
            <Text fontWeight="300">N5000 loan from Adebeyi Loans</Text>
            <Text fontSize="xs" color="gray.100" mt="1">
              Repaid loan before due date February 2021, 10:45 AM
            </Text>
          </VStack>
        </HStack>
        <HStack space={4} mb="2">
          <BadLoan />

          <VStack width="80%">
            <Text fontWeight="300">N53000 loan from Adebeyi Loans</Text>
            <Text fontSize="xs" color="gray.100" mt="1">
              Repaid loan after due date February 2021, 10:45 AM
            </Text>
          </VStack>
        </HStack>
      </VStack>

      <VStack
        space="2"
        p="4"
        bg="gray.70"
        borderRadius="7"
        _dark={{bg: 'black.90'}}>
        <Text fontWeight="300">Repayment History</Text>

        <HStack space={4} mb="2">
          <BadLoan />

          <VStack width="80%">
            <Text fontSize="xs" color="gray.100" mt="1">
              Paid N4500 for Adebeyi Loans on 2021, 10:45 AM
            </Text>
          </VStack>
        </HStack>
        <HStack space={4} mb="2">
          <BadLoan />

          <VStack width="80%">
            <Text fontSize="xs" color="gray.100" mt="1">
              Paid N4500 for Adebeyi Loans on 2021, 10:45 AM | Auto Debit
            </Text>
          </VStack>
        </HStack>
      </VStack>

      <Text
        color="red.100"
        textAlign="center"
        onPress={() =>
          navigation.navigate('LoanStack', {screen: 'LoanRequest'})
        }>
        Decline Loan
      </Text>

      <DaynamicButton
        btnTxt="Approve Loan"
        marginTop="0"
        btnType="primary"
        // onPress={doSubmit}
        loading={loading}
        onPress={() =>
          navigation.navigate('LoanStack', {screen: 'LoanRequest'})
        }
        fieldStatus={true}
      />
    </AppContainer>
  );
};
