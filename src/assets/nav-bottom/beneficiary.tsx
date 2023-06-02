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
  <Svg xmlns="http://www.w3.org/2000/svg" width={59} height={41} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#d1d7dd"
          d="M-17390 4134h24v24h-24Z"
          data-name="Path 28005"
        />
      </ClipPath>
    </Defs>
    <G data-name="Group 56252">
      <Text
        fill="#205072"
        fontFamily="Montserrat-Medium, Montserrat"
        fontSize={10}
        fontWeight={500}
        transform="translate(0 38)">
        <TSpan x={0} y={0}>
          {'Beneficiary'}
        </TSpan>
      </Text>
      <G
        clipPath="url(#a)"
        data-name="Mask Group 41"
        transform="translate(17407 -4134)">
        <Path
          fill="#d1d7dd"
          d="M-17374.429 4143.143a6.429 6.429 0 1 1-6.429 6.429 6.429 6.429 0 0 1 6.429-6.429Zm0 2.857a.714.714 0 0 0-.714.714v2.143h-2.143a.715.715 0 1 0 0 1.429h2.143v2.143a.715.715 0 1 0 1.429 0v-2.143h2.143a.715.715 0 1 0 0-1.429h-2.143v-2.143a.714.714 0 0 0-.715-.714Zm-6.061-1.429a7.877 7.877 0 0 0-.733 1.051l-.206.378h-4.428a.715.715 0 0 0-.7.586l-.012.128v1.107c0 1.627 1.31 2.456 4.318 2.466a7.827 7.827 0 0 0 .264 1.427h-.213c-3.611 0-5.661-1.207-5.793-3.639l-.007-.254v-1.107a2.143 2.143 0 0 1 1.936-2.133l.206-.01Zm-1.796-8.571a3.572 3.572 0 1 1-3.572 3.572 3.572 3.572 0 0 1 3.572-3.572Zm7.143 1.429a2.858 2.858 0 0 1 2.366 4.46 7.9 7.9 0 0 0-4.459.342 2.857 2.857 0 0 1 2.093-4.8Zm-7.143 0a2.143 2.143 0 1 0 2.144 2.143 2.143 2.143 0 0 0-2.144-2.143Zm7.143 1.429a1.429 1.429 0 1 0 1.429 1.429 1.429 1.429 0 0 0-1.429-1.43Z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
