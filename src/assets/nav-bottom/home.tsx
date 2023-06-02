import * as React from 'react';
import Svg, {SvgProps, Defs, ClipPath, Path, G, Rect} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="none"
          stroke="#707070"
          d="M236.5 1053.5h24v24h-24Z"
          data-name="Path 31591"
        />
      </ClipPath>
    </Defs>
    <G data-name="Group 56255">
      <G data-name="Group 56349">
        <G data-name="Group 38474" transform="translate(-171 -777)">
          <Rect
            width={80}
            height={80}
            fill="#fff"
            rx={40}
            transform="translate(171 777)"
          />
          <Rect
            width={60}
            height={60}
            fill="#0a1849"
            data-name="Mask"
            rx={30}
            transform="translate(181 787)"
          />
        </G>
        <G
          clipPath="url(#a)"
          data-name="Mask Group 45"
          transform="translate(-208.5 -1025.5)">
          <G fill="#fff" data-name="Icon ionic-ios-home">
            <Path
              d="M248.122 1058.698a.189.189 0 0 0-.24 0l-7.5 6a.2.2 0 0 0-.072.149v11.057a.1.1 0 0 0 .1.1h5.192a.1.1 0 0 0 .1-.1v-6.731a.1.1 0 0 1 .1-.1h4.423a.1.1 0 0 1 .1.1v6.731a.1.1 0 0 0 .1.1h5.192a.1.1 0 0 0 .1-.1v-11.057a.194.194 0 0 0-.072-.149Z"
              data-name="Path 31589"
            />
            <Path
              d="m257.747 1063.51-9.087-7.279a1.055 1.055 0 0 0-1.317 0l-3.957 3.216v-2.029a.1.1 0 0 0-.1-.1h-2.881a.1.1 0 0 0-.1.1v4.433l-2.049 1.687a.673.673 0 0 0-.058 1 .669.669 0 0 0 .476.2.677.677 0 0 0 .423-.149l8.841-7.115a.086.086 0 0 1 .063-.019.116.116 0 0 1 .063.019l8.841 7.087a.677.677 0 0 0 .423.149.682.682 0 0 0 .678-.712.683.683 0 0 0-.259-.488Z"
              data-name="Path 31590"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
