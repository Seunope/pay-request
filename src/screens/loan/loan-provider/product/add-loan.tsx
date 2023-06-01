import {Keyboard} from 'react-native';
import Toast from 'react-native-toast-message';
import {HStack, Text, VStack} from 'native-base';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/core';
import Utility from '../../../../config/utils/utils';
import InputBar from '../../../../components/InputBar';
import EmptyData from '../../../../components/EmptyData';
import React, {useState, useEffect, useRef} from 'react';
import ErrorText from '../../../../components/ErrorText';
import Button from '../../../../components/DynamicButton';
import LoadingState from '../../../../components/Skeleton';
import Toasts from '../../../../config/services/toast/Toast';
import MessageModal from '../../../../components/MessageModal';
import AppContainer from '../../../../components/AppContainer';
import {useAddLoanBatch} from '../../../../config/hooks/useLoan';
import {onError, onSuccess} from '../../../../config/api/http-mthd';
import {useGetWalletBalance} from '../../../../config/hooks/useWallet';

export default () => {
  const route = useRoute<any>();
  const wallet = useRef<number>();
  const navigation = useNavigation();
  const [nubOfLoans, setNubOfLoans] = useState<string>();
  const [loanAmount, setLoanAmount] = useState<number>(
    route.params?.maxPermissible,
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const {data, error, refetch, isLoading, isFetching, isError} =
    useGetWalletBalance();
  const {
    mutate,
    reset,
    data: d,
    error: e,
    isError: isE,
    isLoading: isL,
  } = useAddLoanBatch();

  useEffect(() => {
    refetch();
  }, []);

  const onClose = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'DashboardTab'}],
      // routes: [{name: 'DashboardTab', screen: 'Provider'}], //did not work
    });
  };

  const doSubmit = async () => {
    Keyboard.dismiss();
    setErrorMessage(null);
    mutate({
      nubOfLoans,
      walletBalance: wallet.current,
      loanProductId: route.params.loanProductId,
      loanProviderId: route.params.loanProviderId,
    });
  };

  if (isE) {
    const msg = onError(e);
    Toasts.error(msg);
    setErrorMessage(msg);
    reset(); //prevent api call on state change
  }

  if (d) {
    const res = onSuccess(d);
    Toast.show(res.message);
    reset(); //prevent api call on state change
    setIsOpen(true);
  }

  const setTotalLoanAmount = (nub: string) => {
    const numb = Number(nub);
    if (numb === 0) {
      Toasts.error('Value must be greater than zero');
      return;
    }
    setNubOfLoans(nub);
    setLoanAmount(route.params?.maxPermissible * numb);
  };

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);

    return <EmptyData onRetry={refetch} />;
  }

  if (isLoading || isFetching) {
    <LoadingState type="3" />;
  }

  if (data) {
    const res = onSuccess(data);
    console.log('res', res);
    console.log('res.balance', res.balance);

    wallet.current = res.balance;

    return (
      <AppContainer
        scrollAble={true}
        headerTxt="Add Loan"
        subHeaderTxt={`Add more loans to ${route.params?.loanName} Loan`}>
        <HStack
          p="2"
          px="4"
          borderWidth="1"
          borderColor="gray.90"
          // bgColor="gray.80"
          borderRadius="5"
          justifyContent="space-between">
          <VStack>
            <Text fontSize="xs">Wallet Balance</Text>
            <Text fontSize="md" mb="1" mt="1" fontWeight="300">
              {Utility.formatAmount(res.balance, false)}
            </Text>
          </VStack>
          <VStack>
            <Text fontSize="xs">Total Loan Value</Text>
            <Text fontSize="md" mb="1" mt="1" fontWeight="300">
              {Utility.formatAmount(Number(loanAmount), false)}
            </Text>
          </VStack>
        </HStack>

        <Text>Interest: {route.params?.interest}%</Text>
        <Text>Loan Name: {route.params?.loanName}</Text>
        <Text>Maximum Tenure: {route.params?.maxTenurePermissible} days</Text>
        <Text fontWeight="300">
          Your Earnings:{' '}
          {Utility.formatAmount(
            (Number(loanAmount) * route.params?.interest) / 100,
          )}
        </Text>
        <Text>
          Loan Amount: {Utility.formatAmount(route.params?.maxPermissible)}
        </Text>

        <Text color="gray.100" my="2">
          An equivalent amount of the Product loan amount multiply by the number
          of loan will be deducted from your wallet
        </Text>

        <InputBar
          maxLength={11}
          placeholder="Enter number"
          label="Number of Loans"
          value={nubOfLoans}
          keyboardType="number-pad"
          onChangeText={text => setTotalLoanAmount(text)}
        />

        <ErrorText message={errorMessage} />

        <Button
          loading={isL}
          btnType="primary"
          btnTxt="Create Loan"
          onPress={() => doSubmit()}
          fieldStatus={nubOfLoans ? true : false}
        />

        <MessageModal
          isOpen={isOpen}
          onClose={onClose}
          title="Yep! Loans created successfully"
          message="PLEASE NOTE: You will be notified via email upon completion within
              the next 5 minutes."
        />
      </AppContainer>
    );
  }
};
