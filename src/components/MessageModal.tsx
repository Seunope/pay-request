import React from 'react';
import {Text, AlertDialog, Center} from 'native-base';
import SuccessShield from '../assets/loan/customer/success-shield';

interface Props {
  title: string;
  isOpen: boolean;
  message?: string;
  onClose: () => void;
}

const MessageModal: React.FC<Props> = props => {
  const cancelRef = React.useRef(null);

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Body>
          <Center p="4">
            <SuccessShield />
          </Center>
          <Text
            fontSize="md"
            fontWeight="300"
            color="blue.90"
            mb="4"
            textAlign="center">
            {props.title}
          </Text>
          <Text textAlign="justify">{props.message}</Text>
        </AlertDialog.Body>
        <AlertDialog.Footer></AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
export default MessageModal;
