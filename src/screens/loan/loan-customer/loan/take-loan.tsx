import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import InputBar from '../../../../components/InputBar';
import {Text, HStack, Slider, Center} from 'native-base';
import Button from '../../../../components/DynamicButton';
import AppContainer from '../../../../components/AppContainer';

export default () => {
  const navigation = useNavigation();
  const [tenure, setTenure] = useState<number>();
  const [amount, setAmount] = useState<number>();
  const [purpose, setPurpose] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AppContainer
      scrollAble={true}
      headerTxt="Take a Loan"
      subHeaderTxt="Your credit limit ₦200,000">
      <Center borderWidth="1" borderRadius="7" borderColor="gray.90" p="2">
        <Text mb="1" color="blue.100" fontSize="xs">
          Loan Calculated
        </Text>
        <Text fontSize="2xl" fontWeight="300" color="blue.100">
          ₦150,000.00
        </Text>
      </Center>

      <InputBar
        value={purpose}
        placeholder="Enter loan purpose"
        label="Purpose of loan"
        onChangeText={text => setPurpose(text)}
      />

      <Text fontWeight="300">Loan Amount</Text>
      <Slider
        onChange={value => {
          setAmount(Math.floor(value));
        }}
        defaultValue={100000}
        minValue={100}
        maxValue={200000}
        accessibilityLabel="hello world"
        step={100}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      <HStack justifyContent="space-between">
        <Text fontSize="xs">₦10,000</Text>
        <Text fontSize="xs">₦200,000</Text>
      </HStack>

      <Text textAlign="right" fontSize="xs">
        Applicable Interest rate: 15%
      </Text>

      <Text fontWeight="300">Durations</Text>
      <Slider
        onChange={value => {
          setTenure(Math.floor(value));
        }}
        defaultValue={90}
        minValue={7}
        maxValue={120}
        accessibilityLabel="hello world"
        step={10}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      <HStack justifyContent="space-between">
        <Text fontSize="xs">7 days</Text>
        <Text fontSize="xs">120 days</Text>
      </HStack>

      <Text fontSize="xl" color="blue.100" fontWeight="300">
        21 days
      </Text>

      <Button
        btnTxt="Apply Now"
        marginTop="5"
        btnType="primary"
        // onPress={doSubmit}
        loading={loading}
        onPress={() => navigation.navigate('LoanStack', {screen: 'Summary'})}
        fieldStatus={amount && tenure ? true : false}
      />
    </AppContainer>
  );
};
