import React from 'react';
import {Center, Box, VStack, HStack, Skeleton} from 'native-base';

interface Props {
  message?: string;
  loading?: boolean;
  hideImage?: boolean;
  onRetry?: () => void;
  type?: string;
}

const LoadingState: React.FC<Props> = props => {
  return (
    <Box safeArea mt="6">
      <Center w="100%">
        <VStack
          w="90%"
          maxW="400"
          borderWidth="1"
          space={8}
          overflow="hidden"
          rounded="md"
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
          }}>
          {props.type === '1' ? (
            <>
              <Skeleton h="40" />
              <Skeleton.Text px="4" />
              <Skeleton.Text px="4" />
              <Skeleton.Text px="4" />
              <Skeleton px="4" my="4" rounded="md" startColor="blue.60" />
            </>
          ) : props.type === '2' ? (
            <>
              <Skeleton h="40" />
              <Skeleton.Text px="4" />
              <Skeleton h="40" />
              <Skeleton.Text px="4" />
              <Skeleton px="4" my="4" rounded="md" startColor="blue.60" />
            </>
          ) : props.type === '3' ? (
            <>
              <Skeleton h="40" />
              <Skeleton.Text px="4" />
              <Skeleton h="40" />
              <Skeleton.Text px="4" />
            </>
          ) : props.type === '4' ? (
            <>
              <Skeleton.Text px="4" />
              <Skeleton.Text px="4" />
              <Skeleton.Text px="4" />
              <Skeleton h="20" />
              <Skeleton.Text px="4" />
            </>
          ) : (
            <>
              <Skeleton h="20" />
              <Skeleton.Text px="4" />
              <Skeleton.Text px="4" />
              <Skeleton.Text px="4" />
              <Skeleton.Text px="4" />
              <HStack space="2" alignItems="center">
                <Skeleton size="5" rounded="full" />
                <Skeleton h="3" flex="2" rounded="full" />
                <Skeleton
                  h="3"
                  flex="1"
                  rounded="full"
                  startColor="indigo.300"
                />
              </HStack>
              <Skeleton.Text px="4" />
            </>
          )}
        </VStack>
      </Center>
    </Box>
  );
};
export default LoadingState;
