import React, {useState} from 'react';
import {Pressable, Text, Image, Center} from 'native-base';
import Toasts from '../config/services/toast/Toast';
import ImageResizer from 'react-native-image-resizer';
import ImagePicker from 'react-native-image-crop-picker';
import FaceIDIcon from '../assets/loan/customer/face-id';

interface Props {
  actionText: string;
  openFrontCamera?: boolean;
  capturedImage: (text: string) => void;
}

const ImageBar: React.FC<Props> = ({
  actionText,
  capturedImage,
  openFrontCamera = true,
}) => {
  const [newImage, setNewImage] = useState<string>('');

  const upLoadImage = () => {
    ImagePicker.openCamera({
      useFrontCamera: openFrontCamera,
    })
      .then(async image => {
        //To prevent crashes on large images
        let divider = 1;
        if (image.size > 300000) {
          divider = image.size / 300000;
        }
        ImageResizer.createResizedImage(
          image.path,
          image.width / divider,
          image.height / divider,
          'JPEG',
          100,
          0,
        ).then(resp => {
          ImagePicker.openCropper({
            width: 800,
            height: openFrontCamera ? 800 : 600,
            path: resp.uri,
            mediaType: 'photo',
            includeBase64: true,
          }).then(async image2 => {
            Toasts.info('Save image to continue');
            setNewImage(`data:${image2.mime};base64,${image2.data}`);
            capturedImage(`data:${image2.mime};base64,${image2.data}`);
          });
        });
      })
      .catch(e => {
        Toasts.info(JSON.stringify(e.message));
      });
  };
  return (
    <Pressable onPress={upLoadImage}>
      {newImage ? (
        <Center m="10">
          <Image
            source={{uri: `${newImage}`}}
            alt="Selfie Text"
            borderRadius="7"
            size="2xl"
          />
        </Center>
      ) : !openFrontCamera ? null : (
        <Center
          bg="blue.20"
          p="20"
          m="10"
          borderRadius="150"
          _dark={{bg: 'black.90'}}>
          <FaceIDIcon />
        </Center>
      )}

      <Text textAlign="center" color="gray.100">
        {actionText}
      </Text>
    </Pressable>
  );
};
export default ImageBar;
