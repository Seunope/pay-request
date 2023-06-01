import React, {useState} from 'react';
import Swiper from 'react-native-swiper';
import {StyleSheet} from 'react-native';
import colors from '../../../config/utils/colors';
import {scale} from '../../../config/utils/scaling';
import {Text, HStack, Box, VStack, Pressable} from 'native-base';

export default () => {
  const [loading, setLoading] = useState(false);
  const [remoteGroup, setRemoteGroup] = useState([1, 2]);

  const loadGroups = () => {
    if (loading) {
      return <Text>loadin..</Text>;
    } else if (remoteGroup.length === 0) {
      return (
        // <Text>sdssdsds</Text>
        <Box>
          <Pressable
          // onPress={() =>
          //   props.theNav('GroupAjoStack', {
          //     screen: 'CreateGroup',
          //   }) }
          >
            <Box bgColor="red.90" p="2" borderRadius="7" mb="4">
              <Text>
                You don't belong to any group. Create a Group contribution
                today!
              </Text>
            </Box>
          </Pressable>

          <VStack>
            <HStack>
              <Text color="gray.90">monthly</Text>
              <Text> Contribution </Text>
            </HStack>

            <HStack>
              <Text textAlign="center" bgColor="blue.100">
                ₦
              </Text>
              <Text fontWeight="200" fontSize="6xl" color="gray.90">
                20,000
              </Text>
            </HStack>
          </VStack>

          <Text color="blue.90" mt="1" fontWeight="300" fontSize="md">
            Status:
          </Text>
          <Text>Not Joined</Text>

          <Text color="blue.90" mt="4" fontWeight="300" fontSize="md">
            Next Contribution:
          </Text>
          <Text>In the future</Text>

          <Text color="blue.90" mt="4" fontWeight="300" fontSize="md">
            Next Payout:
          </Text>
          <Text>In the future</Text>

          <Text color="blue.90" mt="4" fontWeight="300" fontSize="md">
            Group Name:
          </Text>

          <Text fontSize="xl" fontWeight="300">
            {' '}
            Not Created
          </Text>
        </Box>
      );
    }
    return remoteGroup.map((group, index) => {
      const finalObject = (
        <Box key={index}>
          <Pressable
          // onPress={() =>
          //   props.theNav('GroupAjoStack', {
          //     screen: 'CreateGroup',
          //   }) }
          ></Pressable>

          <VStack>
            <HStack>
              <Text color="gray.90">monthly</Text>
              <Text> Contribution </Text>
            </HStack>

            <HStack>
              <Text textAlign="center" bgColor="blue.100">
                ₦
              </Text>
              <Text fontWeight="200" fontSize="6xl" color="gray.90">
                20,000
              </Text>
            </HStack>
          </VStack>

          <Text color="blue.90" mt="1" fontWeight="300" fontSize="md">
            Status:
          </Text>
          <Text>Not Joined</Text>

          <Text color="blue.90" mt="4" fontWeight="300" fontSize="md">
            Next Contribution:
          </Text>
          <Text>In the future</Text>

          <Text color="blue.90" mt="4" fontWeight="300" fontSize="md">
            Next Payout:
          </Text>
          <Text>In the future</Text>

          <Text color="blue.90" mt="4" fontWeight="300" fontSize="md">
            Group Name:
          </Text>

          <Text fontSize="xl" fontWeight="300">
            {' '}
            Not Created
          </Text>
        </Box>
      );
      return finalObject;
    });
  };

  return (
    <Swiper
      style={styles.wrapper}
      autoplay={true}
      autoplayTimeout={6}
      //   showsButtons={true}
      //   containerStyle={{
      //     flex: 1,
      //     backgroundColor: 'yellow',
      //     marginBottom: 0,
      //     paddingBottom: 0,
      //   }}
      // dot={<View style={styles.dotStyle} />}
      // activeDot={<View style={styles.activeDotStyle} />}
      showsPagination={true}>
      {loadGroups()}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  containerSlider: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 0,
  },

  wrapper: {},
  msgBoard: {
    flex: 1,
  },

  activeDotStyle: {
    backgroundColor: colors.blue[100],
    width: scale(12),
    height: scale(12),
    borderRadius: scale(6),
    marginLeft: scale(3),
    marginRight: scale(3),
    marginTop: scale(3),
    marginBottom: scale(3),
  },
  dotStyle: {
    backgroundColor: colors.blue[90],
    width: scale(8),
    height: scale(8),
    borderRadius: scale(6),
    marginLeft: scale(3),
    marginRight: scale(3),
    marginTop: scale(3),
    marginBottom: scale(3),
  },
});
