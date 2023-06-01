import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20.666}
    height={20.666}
    {...props}>
    <Path
      d="M10.333 0a10.333 10.333 0 1 0 10.333 10.333A10.337 10.337 0 0 0 10.333 0ZM2.067 10.333a8.264 8.264 0 0 1 8.266-8.266A8.165 8.165 0 0 1 15.4 3.813L3.813 15.4a8.165 8.165 0 0 1-1.746-5.067Zm8.266 8.267a8.165 8.165 0 0 1-5.063-1.747L16.853 5.27a8.165 8.165 0 0 1 1.747 5.063 8.264 8.264 0 0 1-8.267 8.267Z"
      data-name="Icon material-block"
    />
  </Svg>
);
export default SvgComponent;
