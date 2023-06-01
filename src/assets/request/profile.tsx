import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20.666}
    height={23.06}
    {...props}>
    <G data-name="Icon ionic-md-contacts">
      <G data-name="Group 53831">
        <Path
          d="M14.569 15.743a8.6 8.6 0 0 1-8.473 0C2.78 16.76.75 20.107 0 23.06h20.666c-.748-2.953-2.78-6.306-6.097-7.317Z"
          data-name="Path 31745"
        />
        <Path
          d="M10.333 0a7.443 7.443 0 1 0 7.445 7.443A7.444 7.444 0 0 0 10.333 0Zm0 13.112A5.752 5.752 0 0 1 5.13 9.56h10.406a5.752 5.752 0 0 1-5.203 3.552Z"
          data-name="Path 31746"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
