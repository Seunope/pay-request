import React from 'react';
import {Button} from 'native-base';

interface Props {
  btnTxt: string;
  // btnType?: string;
  // outline?: boolean;
  // marginTop?: string;
  // onPress: () => void; // or onPress(): void;
  // size?: string; //"xs", "sm", "md", "lg"
  // bg?: string;
}

const ButtonComp: React.FC<Props> = props => {
  return (
    <Button
      size="sm"
      bg="blue.100"
      _text={{
        py: '2',
      }}>
      {props.btnTxt}
    </Button>
  );
};

export default ButtonComp;
