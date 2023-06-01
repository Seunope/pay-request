import {
  Box,
  Text,
  Button,
  HStack,
  VStack,
  Skeleton,
  Pressable,
} from 'native-base';
import Toast from 'react-native-simple-toast';
import EyeIcon from '../../../assets/others/eye';
import React, {useState, useEffect} from 'react';
import Utility from '../../../config/utils/utils';
import {useNavigation} from '@react-navigation/core';
import TopUpIcon from '../../../assets/dashboard/top-up';
import Toasts from '../../../config/services/toast/Toast';
import Clipboard from '@react-native-community/clipboard';
import CashOutIcon from '../../../assets/dashboard/cash-out';
import AppStorage from '../../../config/services/AppStorage';
import {useGetWallet} from '../../../config/hooks/useWallet';
import CopyTextIcon from '../../../assets/dashboard/copy-text';
import {onError, onSuccess} from '../../../config/api/http-mthd';

const GroupayBalance = () => {
  const navigation = useNavigation();
  const [bvnNumber, setBvnNumber] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {data, error, refetch, isLoading, isFetching, isError} =
    useGetWallet(bvnNumber);

  useEffect(() => {
    preLoad();
  }, []);

  const preLoad = async () => {
    var vStatus = await AppStorage.getData('vStatus');
    if (vStatus?.bvnNumber) {
      console.log('i was here');
      setBvnNumber(vStatus?.bvnNumber);
      refetch();
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const copyToClipboard = async (text: string) => {
    Clipboard.setString(text);
    Toast.show('Copied! ' + text, Toast.LONG);
  };

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);
    return (
      <Button onPress={() => refetch()} size="xs" variant="unstyled">
        Reload Balance
      </Button>
    );
  }

  if (isLoading || isFetching) {
    return <Skeleton.Text px="4" />;
  }

  if (data) {
    const res = onSuccess(data);

    return (
      <Box px="4">
        <HStack justifyContent="space-between">
          <VStack>
            <Text fontWeight="300" fontSize="xl">
              {Utility.formatAmount(
                res.userWallet.balance,
                true,
                2,
                !isVisible,
              )}
            </Text>
            <Text color="gray.60" mb="2">
              Groupay Balance
            </Text>
          </VStack>

          {res.userWallet.accountNumber ? (
            <HStack space="1">
              <VStack>
                <Text
                  fontSize="xs"
                  fontWeight={300}
                  alignItems="center"
                  onPress={() => copyToClipboard(res.userWallet.accountNumber)}>
                  {res.userWallet.accountNumber}
                </Text>
                <Text fontSize="2xs" color="gray.100">
                  {res.userWallet.bankName}
                </Text>
              </VStack>
              <Pressable
                onPress={() => copyToClipboard(res.userWallet.accountNumber)}>
                <CopyTextIcon />
              </Pressable>
            </HStack>
          ) : null}
        </HStack>

        <HStack justifyContent="space-between">
          <Text fontWeight="300" fontSize="sm">
            {Utility.formatAmount(res.userWallet.balance, true, 2, !isVisible)}
          </Text>
          <Pressable onPress={() => toggleVisibility()}>
            <EyeIcon isVisible={isVisible} />
          </Pressable>
        </HStack>

        <Text color="gray.60" fontSize="xs">
          Ledger Balance
        </Text>

        <HStack mt="2" justifyContent="space-between">
          <Button
            pl="6"
            leftIcon={<TopUpIcon />}
            _text={{
              pr: 6,
              pl: 0,
            }}
            onPress={() => navigation.navigate('AuthStack')}>
            Top up
          </Button>
          <Button
            pl="6"
            borderColor="blue.90"
            variant="outline"
            leftIcon={<CashOutIcon />}
            _text={{
              pr: 6,
              pl: 0,
              color: 'blue.90',
            }}>
            Cash out
          </Button>
        </HStack>
      </Box>
    );
  }
};
export default GroupayBalance;
