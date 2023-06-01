export default {
  Text: {
    baseStyle: {
      fontWeight: '200',
    },
  },
  Button: {
    baseStyle: {
      borderRadius: 'md',
      _text: {
        fontWeight: '100',
        px: '12',
      },
      // _hover: { //did not work
      //   borderColor: '#00b',
      //   backgroundColor: '#fff',
      // },
      // _pressed: {
      //   borderColor: 'red',
      //   backgroundColor: 'red',
      // },
    },
  },
  Input: {
    baseStyle: {
      borderRadius: 'sm',
      _focus: {
        borderColor: 'blue.100',
      },
    },
  },
  //caused plenty problem
  // Box: {
  //   baseStyle: {
  //     _dark: {
  //       bgColor: 'black.100',
  //     },
  //   },
  // },
  // HStack: {
  //   baseStyle: {
  //     _dark: {
  //       bgColor: 'black.100',
  //     },
  //   },
  // },
  // VStack: {
  //   baseStyle: {
  //     _dark: {
  //       bgColor: 'black.100',
  //     },
  //   },
  // },
};
