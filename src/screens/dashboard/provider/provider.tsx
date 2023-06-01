import HowItWorks from './how-it-works';
import LoanPortfolio from './loan-portfolio';
import TopHeaderBar from '../home/top-header';
import RecentActivity from './recent-activity';
import EyeIcon from '../../../assets/others/eye';
import React, {useState, useContext} from 'react';
import Utility from '../../../config/utils/utils';
import {useNavigation} from '@react-navigation/core';
import EmptyData from '../../../components/EmptyData';
import LoadingState from '../../../components/Skeleton';
import Toasts from '../../../config/services/toast/Toast';
import AppContainer from '../../../components/AppContainer';
import {onError, onSuccess} from '../../../config/api/http-mthd';
import {useGetProviderPortfolio} from '../../../config/hooks/useLoan';
import {AppStateContext} from '../../../config/utils/context/app_state';
import {Text, HStack, VStack, Button, Box, Pressable} from 'native-base';

export default () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {contextValue, updateContext} = useContext(AppStateContext);
  const {data, error, refetch, isLoading, isFetching, isError} =
    useGetProviderPortfolio();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);
    return <EmptyData onRetry={refetch} />;
  }

  if (isLoading || isFetching) {
    return <LoadingState type="3" />;
  }

  if (data) {
    const res = onSuccess(data);
    if (res.data.portfolio) {
      contextValue.lProvider = {
        id: res.data.portfolio.loanProviderId,
        providerProcessingFee: res.data.portfolio.groupayProviderProcessingFee,
      };
    }
    updateContext(contextValue);

    return (
      <AppContainer scrollAble={true} isDashboard={true} padding="0">
        <TopHeaderBar padding="4" />

        {Object.keys(res).length === 0 ? (
          <HowItWorks />
        ) : (
          <Box mx="4">
            <HStack justifyContent="space-between">
              <Text>Loan Provider</Text>
              <Text
                fontSize="xs"
                color="blue.90"
                textDecorationLine="underline"
                onPress={() =>
                  navigation.navigate('LoanStack', {screen: 'AgentRecoveryBid'})
                }>
                Recovery Bid
              </Text>
              <Text
                fontSize="xs"
                color="blue.90"
                textDecorationLine="underline"
                onPress={() =>
                  navigation.navigate('LoanStack', {screen: 'ProductList'})
                }>
                Loan Products
              </Text>
              <Pressable onPress={() => toggleVisibility()}>
                <EyeIcon isVisible={isVisible} />
              </Pressable>
            </HStack>

            <Box
              p="2"
              px="4"
              borderWidth="1"
              borderColor="gray.90"
              // bgColor="gray.80"
              borderRadius="5">
              <HStack justifyContent="space-between">
                <VStack width="70%">
                  <Text fontSize="xs">Investment Portfolio</Text>
                  <Text fontSize="md" mb="1" mt="1" fontWeight="300">
                    {Utility.formatAmount(
                      res.data.portfolio.capital,
                      false,
                      0,
                      !isVisible,
                    )}
                  </Text>
                </VStack>
                <VStack width="30%">
                  <Text fontSize="xs">Total Earnings</Text>
                  <Text fontSize="md" mb="1" mt="1" fontWeight="300">
                    {Utility.formatAmount(
                      res.data.portfolio.interest +
                        res.data.portfolio.defaultCharge,
                      false,
                      0,
                      !isVisible,
                    )}
                  </Text>
                </VStack>
              </HStack>

              <HStack justifyContent="space-between" mt="2">
                <VStack width="70%">
                  <Text fontSize="xs">Available Balance</Text>
                  <Text fontSize="md" mb="1" mt="1" fontWeight="300">
                    {Utility.formatAmount(
                      res.data.portfolio.availableBalance,
                      false,
                      0,
                      !isVisible,
                    )}
                  </Text>
                </VStack>
                <VStack width="30%">
                  <Text fontSize="xs">Loan Lien</Text>
                  <Text fontSize="md" mb="1" mt="1" fontWeight="300">
                    {Utility.formatAmount(
                      res.data.portfolio.loanLien,
                      false,
                      0,
                      !isVisible,
                    )}
                  </Text>
                </VStack>
              </HStack>
            </Box>

            <LoanPortfolio portfolio={res.data.portfolio} />

            <Box
              bgColor="gray.70"
              p="4"
              borderRadius="7"
              _dark={{bg: 'black.90'}}>
              <Text mb="2">Start giving out loan today....</Text>
              <Button
                size="sm"
                onPress={() =>
                  navigation.navigate('LoanStack', {screen: 'CreateProduct'})
                }>
                Create a New Loan Product
              </Button>
            </Box>

            <RecentActivity />
          </Box>
        )}
      </AppContainer>
    );
  }
};
