import {StatusBar} from 'react-native';
import React, {useState} from 'react';
import {Box, useColorMode} from 'native-base';
import colors from '../../../config/utils/colors';
import {launchImageLibrary} from 'react-native-image-picker';
import NavigationBar from '../../../components/NavigationBar';
import {Chat, MessageType, defaultTheme} from '@flyerhq/react-native-chat-ui';

// For the testing purposes, you should probably use https://github.com/uuidjs/uuid
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.floor(Math.random() * 16);
    const v = c === 'x' ? r : (r % 4) + 8;
    return v.toString(16);
  });
};

const BidChat = () => {
  const {colorMode} = useColorMode();
  const [messages, setMessages] = useState<MessageType.Any[]>([]);
  const user = {id: '06c33e8b-e835-4736-80f4-63f44b66666c'};

  const isDarkMode = colorMode === 'light' ? false : true;
  const barStyle = colorMode === 'light' ? 'dark-content' : 'light-content';

  const addMessage = (message: MessageType.Any) => {
    setMessages([message, ...messages]);
  };

  const handleImageSelection = () => {
    launchImageLibrary(
      {
        includeBase64: true,
        maxWidth: 1440,
        mediaType: 'photo',
        quality: 0.7,
      },
      ({assets}) => {
        const response = assets?.[0];

        if (response?.base64) {
          const imageMessage: MessageType.Image = {
            author: user,
            createdAt: Date.now(),
            height: response.height,
            id: uuidv4(),
            name: response.fileName ?? response.uri?.split('/').pop() ?? '🖼',
            size: response.fileSize ?? 0,
            type: 'image',
            uri: `data:image/*;base64,${response.base64}`,
            width: response.width,
          };
          addMessage(imageMessage);
        }
      },
    );
  };

  const handleSendPress = (message: MessageType.PartialText) => {
    const textMessage: MessageType.Text = {
      author: user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: 'text',
    };
    addMessage(textMessage);
  };

  return (
    <Box flex="1" safeArea bgColor="white.100" _dark={{bg: 'black.100'}}>
      <Box p="4" pb="0">
        <NavigationBar showNotification={false} showBackArrow={true} />
      </Box>
      <StatusBar
        translucent
        backgroundColor="transparent"
        hidden={false}
        barStyle={barStyle}
      />
      <Chat
        messages={messages}
        onAttachmentPress={handleImageSelection}
        onSendPress={handleSendPress}
        user={user}
        theme={{
          ...defaultTheme,
          colors: {
            ...defaultTheme.colors,
            inputBackground: colors.blue[100],
            primary: colors.blue[90],
          },
        }}
      />
    </Box>
  );
};

export default BidChat;
