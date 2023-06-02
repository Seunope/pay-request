import React from 'react';
import NavigationBar from './NavigationBar';
import {VStack, Box, ScrollView} from 'native-base';

interface Props {
  space?: number;
  padding?: string;
  headerTxt: string;
  showBack?: boolean;
  showNotify?: boolean;
  scrollAble?: boolean;
  subHeaderTxt?: string;
  checkSession?: boolean;
  children: React.ReactNode;
  backGroundIsWhite: boolean;
}

const AppContainer: React.FC<Props> = ({
  space,
  padding,
  children,
  headerTxt,
  scrollAble,
  backGroundIsWhite,
  showBack = true,
}) => {
  return (
    <Box
      flex={1}
      p={padding ? padding : '5'}
      bgColor={backGroundIsWhite ? 'white.100' : 'blue.50'}
      _dark={{
        bgColor: 'black.100',
      }}
      safeArea>
      <NavigationBar headerTxt={headerTxt} showBackArrow={showBack} />

      {scrollAble ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={space ? space : 4}>{children}</VStack>
        </ScrollView>
      ) : (
        <VStack space={space ? space : 4}>{children}</VStack>
      )}
    </Box>
  );
};
export default AppContainer;
