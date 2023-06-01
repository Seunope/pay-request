import React from 'react';
import colors from '../../../config/utils/colors';
import {useNavigation} from '@react-navigation/core';
import {Text, Box, HStack, Button} from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
  {
    key: 1,
    title: 'Brand New!!!',
    text: 'New interesting features coming up this raining season on Groupay.',
  },
  {
    key: 2,
    title: 'Zero Processing Fee',
    text: 'This Friday no processing fee on all loan. Take advantage of this.',
  },
  {
    key: 3,
    title: 'Airtime Discount',
    text: 'New interesting features coming up this raining season on Groupay.',
  },
];
export default () => {
  const navigation = useNavigation();

  const renderItem = ({item}: any) => {
    return (
      <Box bg="gray.80" p="4" borderRadius="7" mb="2" _dark={{bg: 'black.90'}}>
        <HStack space="2">
          <Text
            fontSize="2xs"
            bg="white.100"
            borderRadius="7"
            p="1"
            _dark={{bg: 'black.90'}}>
            Interest: 7%
          </Text>
          <Text
            fontSize="2xs"
            bg="white.100"
            borderRadius="7"
            p="1"
            _dark={{bg: 'black.90'}}>
            Default: 0.02%
          </Text>
          <Text
            fontSize="2xs"
            bg="white.100"
            borderRadius="7"
            p="1"
            _dark={{bg: 'black.90'}}>
            Grace: 2 days
          </Text>
        </HStack>
        <Text fontSize="xl" fontWeight="200" color="blue.100">
          Gbadebo Loans
        </Text>
        <Text fontWeight="300">₦45,000</Text>

        <HStack justifyContent="space-between">
          <Text color="gray.100">Provider rating: 5.6</Text>

          <Button
            size="xs"
            p="0"
            _text={{
              px: '2',
              py: '0',
            }}
            onPress={() =>
              navigation.navigate('LoanStack', {
                screen: 'TakeLoan',
              })
            }>
            Apply Now
          </Button>
        </HStack>
        <Text fontSize="2xs" color="blue.80">
          Powered by Gbedebo & Sons
        </Text>
      </Box>
    );
  };
  const onDone = () => {};
  return (
    <Box mb="4">
      <HStack justifyContent="space-between">
        <Text color="blue.100" fontWeight="300" mb="2">
          Recommendations
        </Text>
        <Text
          color="blue.80"
          fontSize="xs"
          onPress={() =>
            navigation.navigate('LoanStack', {
              screen: 'MarketPlace',
            })
          }>
          View all
        </Text>
      </HStack>

      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        showDoneButton={false}
        showNextButton={false}
        dotStyle={{
          backgroundColor: 'rgba(0, 0, 0, .2)',
          marginTop: 90,
        }}
        activeDotStyle={{
          backgroundColor: colors.blue[100],
          marginTop: 90,
          paddingRight: 60,
        }}
      />
    </Box>
  );
};
