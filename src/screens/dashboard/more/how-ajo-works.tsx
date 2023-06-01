import React, {useState, useRef} from 'react';
import {AlertDialog, Text, Button} from 'native-base';

export default props => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.Header>How Thirft/Ajo Works</AlertDialog.Header>
        <AlertDialog.Body>
          <Text fontWeight="300">What is Groupay Ajo</Text>
          <Text mb="4" textAlign="justify">
            Groupay is a solution that automates the process from start to
            finish (Contribution payment, reminder, disbursement and fine) for
            group contribution.
          </Text>

          <Text fontWeight="300">How to Start</Text>
          <Text mb="4" textAlign="justify">
            Create a group by giving it a cool name, state your
            weekly/biweekly/monthly contribution. Enter your fee for late
            contribution.
          </Text>

          <Text fontWeight="300">Add Members</Text>
          <Text mb="4" textAlign="justify">
            Add member name and payout bank account number. Each member get a{' '}
            <Text>unique bank account number</Text> where they make
            weekly/biweekly/monthly payment contribution to.{' '}
            <Text>
              Your members don’t need to download the app to use Groupay.
            </Text>
          </Text>

          <Text fontWeight="300">Payment Plan</Text>
          <Text mb="4" textAlign="justify">
            To automate payment tracking and disbursement ensure all your member
            pays their contribution into the unique bank account allocated to
            them when you added them to the group. You can also invite member to
            join your contribution via a link.
          </Text>

          <Text fontWeight="300">Easy Tracking</Text>
          <Text mb="4" textAlign="justify">
            With Groupay, every member can track and monitor each member payment
            contributions.
          </Text>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button
            colorScheme="primary"
            onPress={onClose}
            size="sm"
            _text={{
              px: '0',
            }}>
            Close
          </Button>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
