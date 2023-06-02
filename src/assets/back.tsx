import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21.5}
    height={20.955}
    {...props}>
    <Path
      fill="#0a1849"
      d="m12.359 19.553-1.065 1.064a1.147 1.147 0 0 1-1.627 0L.339 11.294a1.147 1.147 0 0 1 0-1.627L9.667.339a1.147 1.147 0 0 1 1.627 0l1.065 1.065a1.153 1.153 0 0 1-.019 1.649L6.558 8.559h13.791a1.149 1.149 0 0 1 1.155 1.151v1.536a1.149 1.149 0 0 1-1.152 1.152H6.558l5.782 5.509a1.145 1.145 0 0 1 .019 1.646Z"
      data-name="Icon awesome-arrow-left"
    />
  </Svg>
);
export default SvgComponent;
