import React, {useState, useRef} from 'react';
import {
  Box,
  Text,
  HStack,
  VStack,
  Spacer,
  Spinner,
  FlatList,
} from 'native-base';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/core';
import Utility from '../../../../config/utils/utils';
import EmptyData from '../../../../components/EmptyData';
import LoadingState from '../../../../components/Skeleton';
import Toasts from '../../../../config/services/toast/Toast';
import AppContainer from '../../../../components/AppContainer';
import {useMyLoanProduct} from '../../../../config/hooks/useLoan';
import {onError, onSuccess} from '../../../../config/api/http-mthd';
import {LoanProduct, Pagination} from '../../../../config/utils/types';

const ProductList = () => {
  const navigation = useNavigation();
  const pageInfo = useRef<Pagination>();
  const [remoteData, setRemoteData] = useState<any>([]);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const {data, error, refetch, isLoading, isSuccess, isFetching, isError} =
    useMyLoanProduct({next: pageInfo.current?.nextPageKey});

  const handleRefresh = async () => {
    setRemoteData([]);
    refetch();
  };

  const handleLoadMore = async () => {
    if (pageInfo.current?.hasNextPage) {
      refetch();
    } else {
      Toast.show('No more data!', Toast.LONG);
    }
  };

  const renderFooter = () => {
    if (!loadingMore) {
      return <Box mt="4" />;
    }

    return (
      <Box mt="4">
        <Spinner />
      </Box>
    );
  };

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);
    return <EmptyData onRetry={refetch} />;
  }

  if (isSuccess) {
    const res = onSuccess(data);
    pageInfo.current = res.data.pageInfo;
  }

  if (isLoading) {
    return <LoadingState type="3" />;
  }

  if (data) {
    const res = onSuccess(data);
    let products = remoteData;
    //console.log('remoteData', res.data.products);
    if (res.data.products.length > 0) {
      products =
        remoteData?.length === 0
          ? res.data.products
          : [...remoteData, ...res.data.products];

      // console.log('products', products.length);
      // isRefresh ? setRemoteData(res.data.batches) : setRemoteData(data);
    }

    return (
      <AppContainer
        headerTxt="Product List"
        subHeaderTxt="A quick place to manage loan products">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={({item}: any) => (
            <Box pl={['0', '4']} pr={['0', '5']} py="2" mb="1">
              <HStack space={[2, 3]} justifyContent="space-between">
                <VStack
                  borderColor="black.70"
                  borderBottomWidth="1"
                  width="100%">
                  <HStack justifyContent="space-between" width="100%">
                    <Text
                      color="black.100"
                      fontWeight="300"
                      _dark={{color: 'gray.90'}}
                      onPress={() =>
                        navigation.navigate('LoanStack', {
                          screen: 'AddLoanProduct',
                          params: {
                            loanProductId: item.id,
                            interest: item.interest,
                            loanName: item.loanName,
                            maxPermissible: item.maxPermissible,
                            loanProviderId: item.loanProviderId,
                            maxTenurePermissible: item.maxTenurePermissible,
                          },
                        })
                      }>
                      {item.loanName}
                    </Text>

                    <Text
                      fontSize="xs"
                      color="blue.90"
                      onPress={() =>
                        navigation.navigate('LoanStack', {
                          screen: 'AddLoanProduct',
                          params: {
                            loanProductId: item.id,
                            interest: item.interest,
                            loanName: item.loanName,
                            maxPermissible: item.maxPermissible,
                            loanProviderId: item.loanProviderId,
                            maxTenurePermissible: item.maxTenurePermissible,
                          },
                        })
                      }>
                      Add Loan
                    </Text>
                  </HStack>

                  <Box bg="yellow.70" width="30%" borderRadius="5" pl="1">
                    <Text mb="1" fontSize="xs" _dark={{color: 'black.90'}}>
                      {item.activeLoans}/{item.totalLoans} loans sold,
                    </Text>
                  </Box>

                  <Text mb="3" fontSize="xs">
                    Amount {Utility.formatAmount(item.maxPermissible, false)} |
                    Max tenure: {item.maxTenurePermissible}days
                  </Text>
                  <Text mb="2" fontSize="xs" color="gray.100">
                    Interest rate: {item.interest}% | Grace period:{' '}
                    {item.gracePeriod}days
                  </Text>
                  <Text mb="2" fontSize="xs" color="gray.100">
                    Loan availability: {Utility.upperCaseFirst(item.loanType)} |
                    User type: {Utility.upperCaseFirst(item.loanUserType)}
                  </Text>
                  <Text mb="2" fontSize="xs" color="blue.100">
                    Recovery: {Utility.upperCaseFirst(item.recoveryType)} |
                    Created: {Utility.formatDate(item.createdAt)}
                  </Text>
                </VStack>
                <Spacer />
              </HStack>
            </Box>
          )}
          refreshing={isFetching}
          initialNumToRender={10}
          onRefresh={handleRefresh}
          onEndReached={handleLoadMore}
          ListFooterComponent={renderFooter}
          keyExtractor={(item, index) => index.toString()}
        />
      </AppContainer>
    );
  }
};
export default ProductList;
