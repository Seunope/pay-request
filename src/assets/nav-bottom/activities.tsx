import * as React from 'react';
import Svg, {
  SvgProps,
  Defs,
  ClipPath,
  Path,
  G,
  Text,
  TSpan,
} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={47} height={41} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          stroke="#707070"
          d="M32 830h24v24H32z"
          data-name="Rectangle 18233"
        />
      </ClipPath>
    </Defs>
    <G data-name="Group 56253">
      <Text
        fill="#205072"
        fontFamily="Montserrat-Medium, Montserrat"
        fontSize={10}
        fontWeight={500}
        transform="translate(0 38)">
        <TSpan x={0} y={0}>
          {'Activities'}
        </TSpan>
      </Text>
      <G
        clipPath="url(#a)"
        data-name="Mask Group 46"
        transform="translate(-15 -830)">
        <G fill="#d1d7dd" data-name="Group 3">
          <Path d="M56.029 839.179a1 1 0 0 0-1-1h-5.161a1 1 0 0 0-.712 1.7l.444.453a1 1 0 0 1 0 1.4l-6.857 6.992a1 1 0 0 0 0 1.4l1.545 1.576a1 1 0 0 0 1.428 0l6.8-6.935a1 1 0 0 1 1.428 0l.37.377a1 1 0 0 0 1.714-.7Z" />
          <Path
            d="M45.286 835.272a1 1 0 0 0 0-1.4l-1.545-1.572a1 1 0 0 0-1.428 0l-6.8 6.935a1 1 0 0 1-1.428 0l-.37-.377a1 1 0 0 0-1.715.7v5.263a1 1 0 0 0 1 1h5.161a1 1 0 0 0 .714-1.7l-.444-.449a1 1 0 0 1 0-1.4Z"
            data-name="Shape"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
