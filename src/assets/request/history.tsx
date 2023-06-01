import * as React from 'react';
import Svg, {SvgProps, G, Path, Text, TSpan} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={118.171}
    height={20.67}
    {...props}>
    <G data-name="Group 56249">
      <Path
        d="M10.335 0A10.335 10.335 0 1 0 20.67 10.335 10.333 10.333 0 0 0 10.335 0Zm.7 11.229a.7.7 0 0 1-.7.7h-4.77a.7.7 0 0 1 0-1.391h4.074V3.975a.7.7 0 0 1 1.391 0Z"
        data-name="Icon ionic-ios-time"
      />
      <Text
        fill="#0a1849"
        data-name="Show History"
        fontFamily="Montserrat-Bold, Montserrat"
        fontSize={12}
        fontWeight={700}
        transform="translate(34.171 14.835)">
        <TSpan x={0} y={0}>
          {'Show History'}
        </TSpan>
      </Text>
    </G>
  </Svg>
);
export default SvgComponent;
