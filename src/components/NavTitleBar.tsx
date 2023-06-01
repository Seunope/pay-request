import React from 'react';
import {Text, Heading} from 'native-base';

interface Props {
  headerTxt?: string;
  hasHeader?: boolean;
  subHeaderTxt?: string;
}

const NavTitleBar: React.FC<Props> = ({hasHeader, headerTxt, subHeaderTxt}) => {
  return hasHeader ? (
    <>
      <Heading mt="2" mb="2" fontSize="2xl" fontWeight={300} color="blue[100]">
        {headerTxt}
      </Heading>
      <Text mb="4" color="gray[100]">
        {subHeaderTxt}
      </Text>
    </>
  ) : null;
};

export default NavTitleBar;
