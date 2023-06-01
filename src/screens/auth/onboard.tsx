import React from 'react';
import {StatusBar} from 'react-native';
import Ajo from '../../assets/on-board/ajo';
import Button from '../../components/Button';
import colors from '../../config/utils/colors';
import Bills from '../../assets/on-board/bills';
import {Text, Box, useColorMode} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import GetLoan from '../../assets/on-board/get-loan';
import FundLoan from '../../assets/on-board/fund-loan';
import RecoverLoan from '../../assets/on-board/recovery';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: '- Ajo/Thrift -',
    text: 'Simplified way to track group contribution online and offline.',
    image: <Ajo />,
  },
  {
    key: 2,
    title: '- Bills Payment -',
    text: 'Pay your bills with easy method',
    image: <Bills />,
  },
  {
    key: 3,
    title: '- Get a Loan -',
    text: 'Access the loan market to pick the loan and rate that best suits your needs.',
    image: <GetLoan />,
  },
  {
    key: 4,
    title: '- Fund a Loan -',
    text: 'Let your money work for you. We help you manage your loan portfolio',
    image: <FundLoan />,
  },
  {
    key: 5,
    title: '- Recover a Loan -',
    text: 'Earn money as you recover a loan from debtors close to you',
    image: <RecoverLoan />,
  },
];

// type Props = StackScreenProps<RootStackScreen, 'Welcome'>;

const Onboard = () => {
  const {colorMode} = useColorMode();
  const navigation = useNavigation();

  const barStyle = colorMode === 'light' ? 'dark-content' : 'light-content';

  const renderItem = ({item}: any) => {
    return (
      <Box flex="1" p="4" justifyContent="center" alignItems="center">
        <StatusBar
          translucent
          barStyle={barStyle}
          backgroundColor="transparent"
        />

        <Text
          fontSize="2xl"
          fontWeight="300"
          color="black.100"
          mb="2"
          _dark={{color: 'gray.100'}}>
          {item.title}
        </Text>
        <Text fontSize="md" mb="8" textAlign="center" mx="4">
          {item.text}
        </Text>
        {item.image}
        {item.key === 5 ? (
          <Button
            marginTop="10"
            btnTxt="Get Started"
            btnType="primary"
            onPress={() => navigation.navigate('AuthStack', {screen: 'LogIn'})}
          />
        ) : null}
      </Box>
    );
  };
  const onDone = () => {};
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      showDoneButton={false}
      showNextButton={false}
      dotStyle={{backgroundColor: 'rgba(0, 0, 0, .2)'}}
      activeDotStyle={{backgroundColor: colors.blue[100], paddingRight: 60}}
    />
  );
};
export default Onboard;
