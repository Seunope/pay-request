import React from 'react';
import {
  Text,
  Box,
  Pressable,
  CheckCircleIcon,
  VStack,
  HStack,
  Progress,
  ZStack,
} from 'native-base';

export default () => {
  return (
    <Box flex="1">
      <HStack space="2">
        <Box bg="blue.100" p="4" borderRadius="7" width="65%">
          {/* <ZStack mr="-7"> */}
          {/* <Box bg="gray.70" size="7" rounded="lg" shadow={3}> */}
          {/* <CheckCircleIcon /> */}
          {/* </Box> */}
          {/* </ZStack> */}
          <HStack justifyContent="space-between">
            <Text fontSize="2xs" color="gray.90">
              Credit Rating
            </Text>
            <CheckCircleIcon />
          </HStack>

          <Text fontSize="4xl" color="gray.80">
            3.2
          </Text>
          <Text fontSize="2xs" color="gray.90">
            Bad Loans
          </Text>
          <Progress size="xs" mb={2} value={25} />

          <Text fontSize="2xs" color="gray.90">
            Good Loans
          </Text>
          <Progress size="xs" mb={2} value={89} />

          <Text fontSize="2xs" color="gray.90">
            Defaulted Loans
          </Text>
          <Progress size="xs" value={10} />
        </Box>

        <VStack width="30%" space="2">
          <Box bg="gray.70" p="2" borderRadius="7" _dark={{bg: 'black.90'}}>
            <Text fontSize="2xs" color="blue.100">
              You qualify for a loan of
            </Text>
            <Text fontSize="xl" color="blue.100">
              ₦50k
            </Text>
            <Text fontSize="2xs" color="blue.90">
              Upgrade
            </Text>
          </Box>

          <Box bg="gray.70" p="2" borderRadius="7" _dark={{bg: 'black.90'}}>
            <Text fontSize="2xs" color="blue.100" fontWeight="300" mb="2">
              My History:
            </Text>
            <Text fontSize="2xs" color="blue.90" mb="2">
              Loan(40)
            </Text>
            <Text fontSize="2xs" color="blue.90">
              Repayment(122)
            </Text>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};
