import React from 'react';
import {Button} from 'native-base';

interface Props {
  btnTxt: string;
  btnType?: string;
  outline?: boolean;
  marginTop?: string;
  onPress: () => void; // or onPress(): void;
  size?: string; //"xs", "sm", "md", "lg"
  bg?: string;
}

const ButtonArvo: React.FC<Props> = props => {
  const btnSize = props.size ? props.size : 'md';
  const btnBackground =
    props.btnType === 'primary'
      ? 'blue.80'
      : props.btnType === 'success'
      ? 'green.100'
      : // : 'accent.red';
        props.bg;
  return (
    <Button
      mt={props.marginTop || '10'}
      //variant="outline"
      key={btnSize}
      size={btnSize}
      bg={props.bg}
      onPress={props.onPress}
      bgColor={btnBackground}>
      {props.btnTxt}
    </Button>
  );
};

export default ButtonArvo;
