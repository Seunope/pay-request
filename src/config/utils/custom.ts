export default {
  Text: {
    baseStyle: {
      fontWeight: '200',
    },
  },
  Button: {
    baseStyle: {
      borderRadius: '10',
      shadow: '6',
      _text: {
        fontWeight: '400',
        px: '12',
      },
    },
  },
  Input: {
    baseStyle: {
      borderRadius: 'sm',
      fontSize: 'xl',
      _text: {
        fontWeight: '200',
        px: '14',
      },
      _focus: {
        borderColor: 'gray.80',
        bg: 'gray.80',
      },
    },
  },
};
