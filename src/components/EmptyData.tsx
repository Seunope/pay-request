import React from 'react';
import {View, Text, Button} from 'native-base';
import {StyleSheet} from 'react-native';
// import Button from '../components/ButtonModal';
import EmptyDataIcon from '../assets/others/empty-data';

interface Props {
  message?: string;
  loading?: boolean;
  hideImage?: boolean;
  onRetry?: () => void;
}

const EmptyData: React.FC<Props> = props => {
  return (
    <View style={styles.main}>
      {props.hideImage ? null : <EmptyDataIcon />}
      <Text fontWeight="300" fontSize="3xl" mt="4">
        Oops
      </Text>
      <Text color="gray.100" fontSize="md" mt="2" textAlign="center" p="4">
        {props.message
          ? props.message
          : 'We can’t seem to find the data you are looking for.'}
      </Text>
      <Button onPress={props.onRetry} size="xs">
        Retry
      </Button>
    </View>
  );
};
export default EmptyData;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
