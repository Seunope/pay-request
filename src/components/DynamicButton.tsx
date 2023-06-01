import React from 'react';
import {Button} from 'native-base';

interface Props {
  size?: string;
  btnTxt: string;
  testId?: string;
  btnType?: string;
  loading: boolean;
  disabled?: boolean;
  marginTop?: string;
  onPress: () => void;
  fieldStatus: boolean;
}

const ButtonArvo: React.FC<Props> = props => {
  const btnSize = props.size ? props.size : 'md';
  const pressAble = props.fieldStatus ? true : false;
  const btnBackground = props.fieldStatus ? 'blue.100' : 'gray.90';
  const btnTextColor = props.fieldStatus ? 'white.90' : 'gray.70';

  return (
    <Button
      mt={props.marginTop ? props.marginTop : '10'}
      size={btnSize}
      key={props.size}
      _text={{
        color: btnTextColor,
      }}
      _spinner={{
        color: 'white.90',
      }}
      bgColor={btnBackground}
      isLoadingText="Submitting"
      isLoading={props.loading}
      onPress={pressAble ? props.onPress : null}
      {...props}>
      {props.btnTxt}
    </Button>
  );
};

export default ButtonArvo;
