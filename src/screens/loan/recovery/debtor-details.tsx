import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import Button from '../../../components/DynamicButton';
import BadLoan from '../../../assets/dashboard/provider/bad';
import AppContainer from '../../../components/AppContainer';
import {
  Avatar,
  Box,
  Divider,
  TextArea,
  HStack,
  Spacer,
  Text,
  VStack,
  Select,
} from 'native-base';
import PickerBar from '../../../components/PickerBar';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>();
  const [userResponse, setUserResponse] = useState<string>();

  return (
    <AppContainer
      // hasHeader={false}
      scrollAble={true}
      headerTxt="Debtor Loan Details"
      subHeaderTxt="A break down of loan">
      <Box py="2" mb="2" bg="blue.20" borderRadius="7">
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

      <Box
        p="2"
        px="4"
        borderWidth="1"
        borderColor="gray.90"
        // bgColor="gray.80"
        borderRadius="5">
        <HStack justifyContent="space-between">
          <VStack width="60%">
            <Text fontSize="xs">Loan Amount</Text>
            <Text fontSize="xs" mb="1" mt="1">
              N400,0000
            </Text>
          </VStack>
          <VStack width="40%">
            <Text fontSize="xs">Amount to Recover</Text>
            <Text fontSize="xl" mb="1" mt="1" fontWeight="300">
              N2,000
            </Text>
          </VStack>
        </HStack>

        <HStack justifyContent="space-between" mt="2">
          <VStack width="60%">
            <Text fontSize="xs">Expected Repayment</Text>
            <Text fontSize="md" mb="1" mt="1" fontWeight="200">
              13th, July 2023
            </Text>
          </VStack>
          <VStack width="40%">
            <Text fontSize="xs">Days in Arrears</Text>
            <Text fontSize="md" mb="1" mt="1" fontWeight="200">
              3
            </Text>
          </VStack>
        </HStack>
      </Box>

      <VStack space="2" p="4" bg="gray.70" borderRadius="7">
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

      <VStack space="2" p="4" bg="gray.70" borderRadius="7">
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

      <VStack space="2" p="4" bg="gray.70" borderRadius="7">
        <HStack justifyContent="space-between">
          <Text fontWeight="300">Customer Friends</Text>
          <Text color="blue.90" fontSize="xs">
            Contact List
          </Text>
        </HStack>

        <HStack space="2">
          <Text fontWeight="200">Name:</Text>
          <Text>Olumiyiwa Peters</Text>
        </HStack>

        <HStack space="2">
          <Text fontWeight="200">Phone number:</Text>
          <Text>090888222</Text>
        </HStack>

        <Divider />

        <HStack space="2">
          <Text fontWeight="200">Name:</Text>
          <Text>Olumiyiwa Peters</Text>
        </HStack>

        <HStack space="2">
          <Text fontWeight="200">Phone number:</Text>
          <Text>090888222</Text>
        </HStack>

        <Divider />

        <HStack space="2">
          <Text fontWeight="200">Name:</Text>
          <Text>Olumiyiwa Peters</Text>
        </HStack>

        <HStack space="2">
          <Text fontWeight="200">Phone number:</Text>
          <Text>090888222</Text>
        </HStack>

        <Divider />
      </VStack>

      <VStack space="2" p="4" bg="gray.70" borderRadius="7">
        <Text fontWeight="300">Recovery Notes</Text>

        <VStack mb="2">
          <HStack justifyContent="space-between">
            <Text fontWeight="300">Status: Reached</Text>
            <Text color="gray.100" fontSize="xs">
              10-10-2022
            </Text>
          </HStack>

          <Text color="gray.100" mt="1">
            I will pay on the 17th February 2023
          </Text>
          <Text>Agent: Bola</Text>
        </VStack>
        <VStack mb="2">
          <HStack justifyContent="space-between">
            <Text fontWeight="300">Status: Unreached</Text>
            <Text color="gray.100" fontSize="xs">
              10-10-2022
            </Text>
          </HStack>

          <Text color="gray.100" mt="1">
            I will pay on the 17th February 2023
          </Text>
          <Text>Agent: Bola</Text>
        </VStack>
      </VStack>

      <TextArea
        h={20}
        placeholder="What was the customer response"
        w="100%"
        onChangeText={text => setDescription(text)}
        returnKeyType="send"
      />

      <PickerBar
        placeholder="Select"
        label="Call Status"
        selectedItem={userResponse}
        onValueChange={itemValue => setUserResponse(itemValue)}
        pickerData={[
          <Select.Item label="Unreachable" value="weekly" key="weekly" />,
          <Select.Item label="Reachable" value="biweekly" key="biweekly" />,
          <Select.Item label="Switched Off" value="monthly" key="monthly" />,
        ]}
      />

      <Button
        btnTxt="Save Note"
        marginTop="0"
        btnType="primary"
        // onPress={doSubmit}
        loading={loading}
        // onPress={() =>
        //   navigation.navigate('LoanStack', {screen: 'LoanRequest'})
        // }
        fieldStatus={true}
      />
    </AppContainer>
  );
};
