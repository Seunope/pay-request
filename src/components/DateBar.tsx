import {
  Box,
  Text,
  HStack,
  Pressable,
  FormControl,
  WarningOutlineIcon,
} from 'native-base';
import {format} from 'date-fns';
import React, {useState} from 'react';
import {Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props {
  ref?: any;
  label: string;
  error?: string;
  isValid?: boolean;
  password?: boolean;
  placeholder: string;
  selectedDate: (disDate: any) => void;
}

const InputBar: React.FC<Props> = props => {
  const [date, setDate] = useState();
  const [mode, setMode] = useState<string>('date');
  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: object, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    props.selectedDate(currentDate.toISOString());
  };

  const showMode = (currentMode: string) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
    setShow(true);
  };

  return (
    <FormControl
      isInvalid={props.isValid}
      w={{
        base: '100%',
        xl: '85%',
      }}>
      <FormControl.Label>{props.label}</FormControl.Label>
      <Box borderRadius="7" borderColor="gray.90" borderWidth="1" p="3">
        <Pressable onPress={showDatePicker}>
          <HStack justifyContent="space-between">
            <Text>{date ? format(date, 'dd-MM-yyyy') : props.placeholder}</Text>
            {/* <DateTrans /> */}
          </HStack>
        </Pressable>
      </Box>

      {show && (
        <DateTimePicker
          mode={mode}
          is24Hour={true}
          ref={props.ref}
          display="spinner"
          value={new Date()}
          onChange={onChange}
        />
      )}

      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {props.error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
export default InputBar;
