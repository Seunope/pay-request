import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  color: string;
  size: number;
}

const SvgComponent = (props: Props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 0C4.476 0 0 4.476 0 10s4.476 10 10 10 10-4.476 10-10S15.524 0 10 0zm0 18.571A8.566 8.566 0 011.429 10 8.566 8.566 0 0110 1.429 8.566 8.566 0 0118.571 10 8.566 8.566 0 0110 18.571z"
      fill={props.color}
    />
    <Path
      d="M14.048 9.286h-3.334V5.952A.702.702 0 0010 5.238a.702.702 0 00-.714.714v3.334H5.952a.702.702 0 00-.714.714c0 .405.31.714.714.714h3.334v3.334c0 .404.31.714.714.714.405 0 .714-.31.714-.714v-3.334h3.334c.404 0 .714-.31.714-.714a.702.702 0 00-.714-.714z"
      fill={props.color}
    />
  </Svg>
);
export default SvgComponent;
