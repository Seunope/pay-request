import * as React from "react"
import Svg, {
  SvgProps,
  Defs,
  ClipPath,
  Path,
  G,
  Text,
  TSpan,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={43} height={41} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#d1d7dd"
          d="M-17393 3978h24v24h-24z"
          data-name="Rectangle 18165"
        />
      </ClipPath>
    </Defs>
    <G data-name="Group 56256">
      <Text
        fill="#205072"
        fontFamily="Montserrat-Medium, Montserrat"
        fontSize={10}
        fontWeight={500}
        transform="translate(0 38)"
      >
        <TSpan x={0} y={0}>
          {"Settings"}
        </TSpan>
      </Text>
      <G
        clipPath="url(#a)"
        data-name="Mask Group 38"
        transform="translate(17402 -3978)"
      >
        <Path
          fill="#d1d7dd"
          d="M-17373.405 3991a6.254 6.254 0 0 0 .051-1c0-.35-.051-.65-.051-1l2.147-1.65a.459.459 0 0 0 .1-.65l-2.046-3.45a.5.5 0 0 0-.614-.2l-2.557 1a7.443 7.443 0 0 0-1.738-1l-.358-2.65a.548.548 0 0 0-.511-.4h-4.093a.548.548 0 0 0-.511.4l-.409 2.65a8.66 8.66 0 0 0-1.739 1l-2.557-1a.479.479 0 0 0-.614.2l-2.046 3.45a.6.6 0 0 0 .1.65l2.2 1.65c0 .35-.051.65-.051 1s.051.65.051 1l-2.148 1.65a.459.459 0 0 0-.1.65l2.046 3.45a.5.5 0 0 0 .614.2l2.557-1a7.442 7.442 0 0 0 1.738 1l.409 2.65a.5.5 0 0 0 .511.4h4.091a.548.548 0 0 0 .511-.4l.41-2.65a8.655 8.655 0 0 0 1.738-1l2.557 1a.479.479 0 0 0 .614-.2l2.046-3.45a.6.6 0 0 0-.1-.65Zm-7.62 2.5a3.5 3.5 0 1 1 3.58-3.5 3.519 3.519 0 0 1-3.581 3.5Z"
          data-name="Icon ionic-md-settings"
        />
      </G>
    </G>
  </Svg>
)
export default SvgComponent
