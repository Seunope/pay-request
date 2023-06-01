import {Formik} from 'formik';
import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {Divider, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import {StackActions} from '@react-navigation/native';
import InputBar from '../../../../components/InputBar';
import ErrorText from '../../../../components/ErrorText';
import Button from '../../../../components/DynamicButton';
import Toasts from '../../../../config/services/toast/Toast';
import AppContainer from '../../../../components/AppContainer';
import {useAddGuarantor} from '../../../../config/hooks/useUser';
import {onError, onSuccess} from '../../../../config/api/http-mthd';
import {guarantorSchema} from '../../../../config/schema/user.schema';

const Guarantor = () => {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const {mutate, data, reset, isLoading, isError, error} = useAddGuarantor();

  const doSubmit = async (values: any) => {
    Keyboard.dismiss();
    setErrorMessage(null);
    mutate({
      name1: values.name1,
      name2: values.name2,
      name3: values.name3,
      phoneNumber1: values.phoneNumber1,
      phoneNumber2: values.phoneNumber2,
      phoneNumber3: values.phoneNumber3,
    });
  };

  if (isError) {
    const msg = onError(error);
    Toasts.error(msg);
    setErrorMessage(msg);
    reset(); //prevent api call on state change
  }

  if (data) {
    const res = onSuccess(data);
    Toasts.success(res.message);
    reset(); //prevent api call on state change
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  }

  return (
    <AppContainer
      scrollAble={true}
      checkSession={false}
      headerTxt="Guarantor List"
      subHeaderTxt="Add friends we can reach in case you default">
      <Formik
        validationSchema={guarantorSchema}
        initialValues={{
          name1: '',
          name2: '',
          name3: '',
          phoneNumber1: '',
          phoneNumber2: '',
          phoneNumber3: '',
        }}
        onSubmit={values => doSubmit(values)}>
        {({handleChange, handleSubmit, isValid, errors, values}) => (
          <VStack space="3">
            <InputBar
              name="name1"
              label="Guarantor 1"
              value={values.name1}
              error={errors?.name1}
              placeholder="Guarantor 1 full name"
              onChangeText={handleChange('name1')}
            />

            <InputBar
              maxLength={11}
              name="phoneNumber1"
              label="Guarantor 1 Phone"
              keyboardType="number-pad"
              error={errors?.phoneNumber1}
              value={values.phoneNumber1}
              placeholder="Enter Guarantor phone"
              onChangeText={handleChange('phoneNumber1')}
            />

            <Divider my="2" bg="gray.90" />

            <InputBar
              name="name2"
              label="Guarantor 2"
              value={values.name2}
              error={errors?.name2}
              placeholder="Guarantor 2 full name"
              onChangeText={handleChange('name2')}
            />

            <InputBar
              maxLength={11}
              name="phoneNumber2"
              label="Guarantor 2 Phone"
              keyboardType="number-pad"
              error={errors?.phoneNumber2}
              value={values.phoneNumber2}
              placeholder="Enter Guarantor phone"
              onChangeText={handleChange('phoneNumber2')}
            />
            <Divider my="2" bg="gray.90" />

            <InputBar
              name="name3"
              label="Guarantor 3"
              value={values.name3}
              error={errors?.name3}
              placeholder="Guarantor 3 full name"
              onChangeText={handleChange('name3')}
            />

            <InputBar
              maxLength={11}
              name="phoneNumber3"
              label="Guarantor 3 Phone"
              keyboardType="number-pad"
              error={errors?.phoneNumber3}
              value={values.phoneNumber3}
              placeholder="Enter Guarantor phone"
              onChangeText={handleChange('phoneNumber3')}
            />
            <ErrorText message={errorMessage} />

            <Button
              btnTxt="Submit"
              btnType="primary"
              onPress={handleSubmit}
              loading={isLoading}
              fieldStatus={
                isValid &&
                values.name1 &&
                values.name2 &&
                values.name3 &&
                values.phoneNumber1 &&
                values.phoneNumber2 &&
                values.phoneNumber3
                  ? true
                  : false
              }
            />
          </VStack>
        )}
      </Formik>
    </AppContainer>
  );
};
export default Guarantor;
