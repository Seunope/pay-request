import {Formik} from 'formik';
import {VStack} from 'native-base';
import {Keyboard} from 'react-native';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/core';
import {StackActions} from '@react-navigation/native';
import DaterBar from '../../../../components/DateBar';
import InputBar from '../../../../components/InputBar';
import ErrorText from '../../../../components/ErrorText';
import PickerBar from '../../../../components/PickerBar';
import Toasts from '../../../../config/services/toast/Toast';
import {Button, Text, Select, AlertDialog} from 'native-base';
import AppContainer from '../../../../components/AppContainer';
import ButtonDynamic from '../../../../components/DynamicButton';
import allIndustries from '../../../../config/data/all_industries';
import {useAddEmployment} from '../../../../config/hooks/useUser';
import {onError, onSuccess} from '../../../../config/api/http-mthd';
import {employmentSchema} from '../../../../config/schema/user.schema';

export default () => {
  const navigation = useNavigation();
  const [industry, setIndustry] = useState<any>();
  const [stateCode, setStateCode] = useState<string>();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [workingTo, setWorkingTo] = useState<string>();
  const [howAreYouPaid, setHowAreYouPaid] = useState<any>();
  const [employmentStatus, setEmploymentStatus] = useState<any>();
  const [startedWorkFrom, setStartedWorkFrom] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const {mutate, data, reset, isLoading, isError, error} = useAddEmployment();

  const doSubmit = async (values: any) => {
    Keyboard.dismiss();
    setErrorMessage(null);
    mutate({
      industry,
      stateCode,
      workingTo,
      howAreYouPaid,
      startedWorkFrom,
      employmentStatus,
      jobTitle: values.jobTitle,
      officeAddress: values.officeAddress,
      monthlyIncome: values.monthlyIncome,
      employersName: values.employersName,
      officePhoneNumber: values.officePhoneNumber,
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

  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  const setSelectedDate = (value: string) => {
    setStartedWorkFrom(value);
  };

  const setSelectedDate2 = (value: string) => {
    setWorkingTo(value);
  };

  const loadIndustries = () => {
    if (allIndustries == null) {
      return <Select.Item label="Loading..." value="key0" />;
    }
    return allIndustries.map(item => {
      return (
        <Select.Item label={item.label} value={item.label} key={item.label} />
      );
    });
  };

  return (
    <AppContainer
      scrollAble={true}
      headerTxt="Employment Data"
      subHeaderTxt="Tell us what you currently do">
      <Formik
        validationSchema={employmentSchema}
        initialValues={{
          jobTitle: '',
          employersName: '',
          monthlyIncome: '',
          officeAddress: '',
          officePhoneNumber: '',
        }}
        onSubmit={values => doSubmit(values)}>
        {({handleChange, handleSubmit, isValid, errors, values}) => (
          <VStack space="3">
            <PickerBar
              placeholder="Select"
              label="Professional Status"
              selectedItem={employmentStatus}
              onValueChange={itemValue => setEmploymentStatus(itemValue)}
              pickerData={[
                <Select.Item
                  label="Work with the Government"
                  value="civil-servant"
                  key="civil-servant"
                />,
                <Select.Item
                  label="Work in the Private Sector"
                  value="private-sector"
                  key="private-sector"
                />,
                <Select.Item
                  label="Runs Personal Business"
                  value="self-employed"
                  key="self-employed"
                />,
                <Select.Item
                  label="Servicing with NYSC"
                  value="nysc"
                  key="nysc"
                />,
                <Select.Item
                  label="I am a Student"
                  value="student"
                  key="student"
                />,
                <Select.Item
                  label="I have no Job"
                  value="unemployed"
                  key="unemployed"
                />,
                <Select.Item label="Retired" value="retired" key="retired" />,
              ]}
            />

            {employmentStatus !== 'unemployed' &&
            employmentStatus !== 'nysc' ? (
              <PickerBar
                placeholder="Select"
                label="Industry"
                selectedItem={industry}
                pickerData={loadIndustries()}
                onValueChange={itemValue => setIndustry(itemValue)}
              />
            ) : null}

            {employmentStatus !== 'unemployed' &&
            employmentStatus !== 'nysc' &&
            employmentStatus !== 'student' ? (
              <>
                <InputBar
                  label="Job Title"
                  name="jobTitle"
                  value={values.jobTitle}
                  error={errors?.jobTitle}
                  placeholder="What is your job title?"
                  onChangeText={handleChange('jobTitle')}
                />
                <InputBar
                  name="officeAddress"
                  label="Office Address"
                  error={errors?.officeAddress}
                  value={values.officeAddress}
                  placeholder="Enter Address"
                  onChangeText={handleChange('officeAddress')}
                />

                <InputBar
                  maxLength={11}
                  name="officePhoneNumber"
                  label="Office Phone number"
                  keyboardType="number-pad"
                  error={errors?.officePhoneNumber}
                  value={values.officePhoneNumber}
                  placeholder="Enter phone number"
                  onChangeText={handleChange('officePhoneNumber')}
                />

                <PickerBar
                  placeholder="Select"
                  label="How are you paid Status"
                  selectedItem={howAreYouPaid}
                  onValueChange={itemValue => setHowAreYouPaid(itemValue)}
                  pickerData={[
                    <Select.Item label="Remita" value="remita" key="remita" />,
                    <Select.Item label="IPPIS" value="IPPIS" key="IPPIS" />,
                    <Select.Item label="Others" value="Others" key="Others" />,
                  ]}
                />
              </>
            ) : null}

            {employmentStatus === 'nysc' ? (
              <InputBar
                label="State code"
                value={stateCode}
                placeholder="NYSC State code"
                onChangeText={text => setStateCode(text)}
              />
            ) : employmentStatus !== 'unemployed' &&
              employmentStatus !== 'retired' ? (
              <InputBar
                name="employersName"
                label="Employer Name"
                error={errors?.employersName}
                value={values.employersName}
                onChangeText={handleChange('employersName')}
                placeholder="What is the name of your work place?"
              />
            ) : null}

            {employmentStatus !== 'unemployed' ? (
              <>
                <DaterBar
                  placeholder="dd/mm/yy"
                  label="Started working here from"
                  selectedDate={setSelectedDate}
                />

                <DaterBar
                  placeholder="dd/mm/yy"
                  label="Worked to"
                  selectedDate={setSelectedDate2}
                />
              </>
            ) : null}

            <InputBar
              name="monthlyIncome"
              label="Monthly Income"
              keyboardType={'number-pad'}
              value={values.monthlyIncome}
              error={errors?.monthlyIncome}
              placeholder="How much do you earn?"
              onChangeText={handleChange('monthlyIncome')}
            />

            <ErrorText message={errorMessage} />

            <ButtonDynamic
              btnTxt="Submit"
              btnType="primary"
              onPress={handleSubmit}
              loading={isLoading}
              fieldStatus={
                // workingTo &&
                // industry &&
                // howAreYouPaid &&
                // startedWorkFrom &&
                employmentStatus
                  ? // values.jobTitle &&
                    // values.officePhoneNumber &&
                    // values.employersName &&
                    // values.monthlyIncome &&
                    // values.officeAddress
                    //&&
                    //isValid
                    true
                  : false
              }
            />
          </VStack>
        )}
      </Formik>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.Header>Access Required</AlertDialog.Header>
          <AlertDialog.Body>
            <Text fontSize="sm" mb="2">
              1. To confirm you are in Nigeria we require your geolocation
            </Text>
            <Text fontSize="sm" mb="2">
              2. We need permission to access your camera, SMS, installed apps,
              and phone contact list.
            </Text>
            <Text fontSize="sm" mb="2">
              This data collection is part of what is needed to determine your
              credit worthiness
            </Text>

            <Text fontSize="sm" mb="2">
              Data collected is stored over https using a secure modern
              cryptography. Groupay will never sell or distribute your data
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
                size="sm"
                _text={{
                  px: '0',
                  color: 'red.100',
                }}>
                Denied
              </Button>
              <Button
                colorScheme="primary"
                onPress={onClose}
                size="sm"
                _text={{
                  px: '0',
                }}>
                Grant Access
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </AppContainer>
  );
};
