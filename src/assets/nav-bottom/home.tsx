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
      d="M16.64 19.374H3.36c-.991 0-1.797-.806-1.797-1.797V8.124a.625.625 0 111.25 0v9.453c0 .302.245.547.546.547h13.282a.547.547 0 00.547-.547V8.124a.625.625 0 111.25 0v9.453c0 .991-.807 1.797-1.797 1.797z"
      fill={props.color} // "#444F68"
    />
    <Path
      d="M19.375 10.31a.623.623 0 01-.442-.182L11.16 2.355c-.64-.64-1.68-.64-2.32 0l-7.773 7.773a.625.625 0 11-.884-.884l7.773-7.773a2.894 2.894 0 014.088 0l7.773 7.773a.625.625 0 01-.442 1.067zM12.5 19.375h-5a.625.625 0 01-.625-.625v-5.547c0-1.077.876-1.954 1.953-1.954h2.344c1.077 0 1.953.877 1.953 1.954v5.547c0 .345-.28.625-.625.625zm-4.375-1.25h3.75v-4.922a.704.704 0 00-.703-.704H8.828a.704.704 0 00-.703.704v4.922z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
