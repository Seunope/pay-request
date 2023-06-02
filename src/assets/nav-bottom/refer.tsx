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
  <Svg xmlns="http://www.w3.org/2000/svg" width={70} height={41} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fffdfd"
          d="M-17379 3974h24v24h-24Z"
          data-name="Path 27997"
        />
      </ClipPath>
    </Defs>
    <G data-name="Group 56254">
      <Text
        fill="#205072"
        fontFamily="Montserrat-Medium, Montserrat"
        fontSize={10}
        fontWeight={500}
        transform="translate(0 38)">
        <TSpan x={0} y={0}>
          {'Refer a friend'}
        </TSpan>
      </Text>
      <G
        clipPath="url(#a)"
        data-name="Mask Group 39"
        transform="translate(17402 -3974)">
        <Path
          fill="#d1d7dd"
          d="M-17374.143 3978.857a2.857 2.857 0 1 1 4.6 2.263l-.057.046a2.857 2.857 0 0 1-4.543-2.309Zm9.684 2.263.061.046a2.862 2.862 0 1 0-.061-.046Zm-5.016 2.023a2.858 2.858 0 1 1-.382 1.429 2.856 2.856 0 0 1 .382-1.429Zm-5.382 0h3.815a4.292 4.292 0 0 0 .847 4.286h-.376a3.573 3.573 0 0 0-3.364 2.371 5.333 5.333 0 0 1-1.333-.775 4.637 4.637 0 0 1-1.732-3.739 2.143 2.143 0 0 1 2.143-2.143Zm11.429 4.286a3.573 3.573 0 0 1 3.363 2.371 5.334 5.334 0 0 0 1.333-.775 4.638 4.638 0 0 0 1.732-3.739 2.143 2.143 0 0 0-2.143-2.143h-3.815a4.292 4.292 0 0 1-.847 4.286Zm1.982 2.754a2.139 2.139 0 0 1 .161.817 4.637 4.637 0 0 1-1.732 3.735A6.332 6.332 0 0 1-17367 3996a6.331 6.331 0 0 1-3.983-1.265 4.637 4.637 0 0 1-1.731-3.735 2.141 2.141 0 0 1 2.143-2.143h7.143a2.144 2.144 0 0 1 1.981 1.326Z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
