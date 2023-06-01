import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../../config/utils/colors';
import {useNavigation} from '@react-navigation/core';
import BadLoan from '../../../assets/dashboard/provider/bad';
import ActiveLoan from '../../../assets/dashboard/provider/active';
import DefaultLoan from '../../../assets/dashboard/provider/default';
import PendingLoan from '../../../assets/dashboard/provider/pending';
import {Text, Box, Pressable, useColorMode, Center} from 'native-base';

export default ({portfolio}) => {
  const navigation = useNavigation();

  const {colorMode} = useColorMode();
  const isDarkMode = colorMode === 'light' ? false : true;

  return (
    <Box>
      <View style={styles.containerMain}>
        <View
          style={[
            styles.containerSub,
            isDarkMode ? {backgroundColor: colors.black[90]} : null,
          ]}>
          <Pressable
            onPress={() =>
              navigation.navigate('LoanStack', {screen: 'LoanRequest'})
            }>
            <Center bg="gray.70" pt="2" _dark={{bg: 'black.90'}}>
              <ActiveLoan />
              <Text
                _dark={{color: 'white.90'}}
                fontWeight="100"
                color="black.80"
                fontSize="2xs"
                pb="2"
                mt="1">
                Running Loan ({portfolio?.activeLoans})
              </Text>
            </Center>
          </Pressable>
        </View>

        <View
          style={[
            styles.containerSub,
            isDarkMode ? {backgroundColor: colors.black[90]} : null,
          ]}>
          <Pressable
            onPress={() =>
              navigation.navigate('LoanStack', {screen: 'LoanRequest'})
            }>
            <Center bg="gray.70" pt="2" _dark={{bg: 'black.90'}}>
              <PendingLoan />
              <Text
                _dark={{color: 'white.90'}}
                fontWeight="100"
                color="black.80"
                fontSize="2xs"
                pb="2"
                mt="1">
                Good Loan ({portfolio?.goodLoans})
              </Text>
            </Center>
          </Pressable>
        </View>

        <View
          style={[
            styles.containerSub,
            isDarkMode ? {backgroundColor: colors.black[90]} : null,
          ]}>
          <Pressable
            onPress={() =>
              navigation.navigate('LoanStack', {screen: 'LoanRequest'})
            }>
            <Center bg="gray.70" pt="2" _dark={{bg: 'black.90'}}>
              <BadLoan />
              <Text
                _dark={{color: 'white.90'}}
                fontWeight="100"
                color="black.80"
                fontSize="2xs"
                pb="2"
                mt="1">
                Bad Loan ({portfolio?.badLoans})
              </Text>
            </Center>
          </Pressable>
        </View>
      </View>

      <View style={styles.containerMain}>
        <View
          style={[
            styles.containerSub,
            isDarkMode ? {backgroundColor: colors.black[90]} : null,
          ]}>
          <Pressable
            onPress={() =>
              navigation.navigate('LoanStack', {screen: 'LoanRequest'})
            }>
            <Center bg="gray.70" pt="2" _dark={{bg: 'black.90'}}>
              <PendingLoan />
              <Text
                _dark={{color: 'white.90'}}
                fontWeight="100"
                color="black.80"
                fontSize="2xs"
                pb="2"
                mt="1">
                Pending Application ({portfolio?.pendingLoans})
              </Text>
            </Center>
          </Pressable>
        </View>

        <View
          style={[
            styles.containerSub,
            isDarkMode ? {backgroundColor: colors.black[90]} : null,
          ]}>
          <Pressable
            onPress={() =>
              navigation.navigate('LoanStack', {screen: 'LoanRequest'})
            }>
            <Center bg="gray.70" pt="2" _dark={{bg: 'black.90'}}>
              <DefaultLoan />
              <Text
                _dark={{color: 'white.90'}}
                fontWeight="100"
                color="black.80"
                fontSize="2xs"
                pb="2"
                mt="1">
                Defaulted Loan ({portfolio?.defaultedLoans})
              </Text>
            </Center>
          </Pressable>
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  containerSub: {
    flex: 1,
    margin: 5,
    padding: 2,
    borderRadius: 7,
    marginBottom: 0,
    justifyContent: 'center',
    backgroundColor: colors.gray[70],
  },
});
