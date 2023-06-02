import React, {LegacyRef, useState} from 'react';
import EyeIcon from '../assets/others/eye';
import {Input, FormControl, WarningOutlineIcon, Icon, Text} from 'native-base';

interface Props {
  name?: string;
  label?: string;
  value?: string;
  error?: string;
  isValid?: boolean;
  password?: boolean;
  minLength?: number;
  maxLength?: number;
  placeholder: string;
  isDisabled?: boolean;
  keyboardType?: string | any;
  passwordShow?: boolean;
  onChangeText?: (text: string) => void;
  icon?: boolean;
  // ref?: LegacyRef<HTMLInputElement> | undefined | any;
}

const InputBar: React.FC<Props> = props => {
  const [passwordShow, setPasswordShow] = useState(false);
  const isValid = props.error && props.error.length > 0 ? true : false;
  const doShowPassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <FormControl
      isInvalid={isValid}
      bg="gray.80"
      borderRadius="6"
      p="2"
      w={{
        base: '100%',
        xl: '85%',
      }}>
      <Text fontWeight="300" ml="3" mb={0} fontSize="2xs" color="gray.100">
        {props.label}
      </Text>
      {props.password ? (
        <Input
          {...props}
          onChangeText={props.onChangeText}
          secureTextEntry={!passwordShow}
          InputRightElement={
            <Icon
              as={<EyeIcon isVisible={passwordShow} />}
              size={5}
              mr="2"
              color="muted.400"
              onPress={doShowPassword}
            />
          }
        />
      ) : props.isDisabled ? (
        <Input isDisabled={true} borderRadius="4" />
      ) : (
        <Input
          {...props}
          bg="gray.80"
          m={0}
          ml={3}
          p={0}
          borderColor="gray.80"
          onChangeText={props.onChangeText}
        />
      )}

      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {props.error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
export default InputBar;
