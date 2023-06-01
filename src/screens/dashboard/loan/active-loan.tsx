import React from 'react';
import {Text, Box, Pressable, Button, VStack, HStack} from 'native-base';

export default () => {
  return (
    <Box>
      <Box bg="blue.20" p="4" borderRadius="7" _dark={{bg: 'black.90'}}>
        <Text fontSize="2xs">Amount Left</Text>
        <HStack justifyContent="space-between">
          <Text fontWeight={300} fontSize="xl">
            ₦250,000
          </Text>
          <Button
            size="xs"
            p="0"
            _text={{
              px: '2',
              py: '0',
            }}>
            Repay Now
          </Button>
        </HStack>

        <HStack justifyContent="space-between" mt="2">
          <VStack>
            <Text fontSize="2xs">Next Repayment</Text>
            <Text fontWeight={300}>₦85,000</Text>
          </VStack>

          <VStack>
            <Text fontSize="2xs">Accured Default</Text>
            <Text fontWeight={300}>₦25</Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};
