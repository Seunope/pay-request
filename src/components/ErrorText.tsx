import React from 'react';
import {Text} from 'native-base';

interface Props {
  message?: string | null;
}

const ErrorText: React.FC<Props> = props => {
  return props.message ? (
    <Text fontSize="xs" mt="2" color="red.100" textAlign="center">
      {props.message}
    </Text>
  ) : null;
};

export default ErrorText;
