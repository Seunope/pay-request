import React from 'react';
import {Button} from 'native-base';

interface Props {
  btnTxt: string;
  onPress: () => void; // or onPress(): void;
}

const ButtonComp: React.FC<Props> = props => {
  return (
    <Button
      size="sm"
      bg="blue.100"
      _text={{
        py: '2',
      }}
      onPress={props.onPress}>
      {props.btnTxt}
    </Button>
  );
};

export default ButtonComp;
