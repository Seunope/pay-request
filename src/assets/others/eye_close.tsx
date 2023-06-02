import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  //isVisible: boolean;
}
const SvgComponent = (props: Props) => (
  <Svg
    width={27}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.732 17.129c-2.075-1.31-3.718-3.014-4.646-4.09-.26-.297-.4-.662-.4-1.038 0-.377.14-.742.4-1.039C4.766 9.013 8.796 5 13.5 5c2.11 0 4.084.807 5.771 1.874"
      stroke="#C4C4C4"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.896 9.887a3.423 3.423 0 0 0-1.095-.66 3.742 3.742 0 0 0-1.297-.236 3.746 3.746 0 0 0-1.299.226c-.412.15-.786.372-1.101.652-.315.28-.565.613-.734.979-.17.366-.257.759-.255 1.155.002.396.092.787.265 1.152.173.365.425.696.743.974M4.5 20l18-16M11.25 18.704A8.95 8.95 0 0 0 13.5 19c4.705 0 8.735-4.013 10.414-5.962.26-.297.4-.663.4-1.04 0-.375-.141-.74-.401-1.038A23.945 23.945 0 0 0 22.016 9"
      stroke="#C4C4C4"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
