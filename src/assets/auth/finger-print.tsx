import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

interface Props {}

const SvgComponent = (props: Props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_191_6971)">
      <Path
        d="M22.2625 5.5875C22.1625 5.5875 22.0625 5.5625 21.975 5.5125C19.575 4.275 17.5 3.75 15.0125 3.75C12.5375 3.75 10.1875 4.3375 8.04998 5.5125C7.74998 5.675 7.37498 5.5625 7.19998 5.2625C7.03748 4.9625 7.14998 4.575 7.44998 4.4125C9.77498 3.15 12.325 2.5 15.0125 2.5C17.675 2.5 20 3.0875 22.55 4.4C22.8625 4.5625 22.975 4.9375 22.8125 5.2375C22.7 5.4625 22.4875 5.5875 22.2625 5.5875ZM4.37498 12.15C4.24998 12.15 4.12498 12.1125 4.01248 12.0375C3.72498 11.8375 3.66248 11.45 3.86248 11.1625C5.09998 9.4125 6.67498 8.0375 8.54998 7.075C12.475 5.05 17.5 5.0375 21.4375 7.0625C23.3125 8.025 24.8875 9.3875 26.125 11.125C26.325 11.4 26.2625 11.8 25.975 12C25.6875 12.2 25.3 12.1375 25.1 11.85C23.975 10.275 22.55 9.0375 20.8625 8.175C17.275 6.3375 12.6875 6.3375 9.11248 8.1875C7.41248 9.0625 5.98748 10.3125 4.86248 11.8875C4.76248 12.0625 4.57498 12.15 4.37498 12.15ZM12.1875 27.2375C12.025 27.2375 11.8625 27.175 11.75 27.05C10.6625 25.9625 10.075 25.2625 9.23748 23.75C8.37498 22.2125 7.92498 20.3375 7.92498 18.325C7.92498 14.6125 11.1 11.5875 15 11.5875C18.9 11.5875 22.075 14.6125 22.075 18.325C22.075 18.675 21.8 18.95 21.45 18.95C21.1 18.95 20.825 18.675 20.825 18.325C20.825 15.3 18.2125 12.8375 15 12.8375C11.7875 12.8375 9.17498 15.3 9.17498 18.325C9.17498 20.125 9.57498 21.7875 10.3375 23.1375C11.1375 24.575 11.6875 25.1875 12.65 26.1625C12.8875 26.4125 12.8875 26.8 12.65 27.05C12.5125 27.175 12.35 27.2375 12.1875 27.2375ZM21.15 24.925C19.6625 24.925 18.35 24.55 17.275 23.8125C15.4125 22.55 14.3 20.5 14.3 18.325C14.3 17.975 14.575 17.7 14.925 17.7C15.275 17.7 15.55 17.975 15.55 18.325C15.55 20.0875 16.45 21.75 17.975 22.775C18.8625 23.375 19.9 23.6625 21.15 23.6625C21.45 23.6625 21.95 23.625 22.45 23.5375C22.7875 23.475 23.1125 23.7 23.175 24.05C23.2375 24.3875 23.0125 24.7125 22.6625 24.775C21.95 24.9125 21.325 24.925 21.15 24.925ZM18.6375 27.5C18.5875 27.5 18.525 27.4875 18.475 27.475C16.4875 26.925 15.1875 26.1875 13.825 24.85C12.075 23.1125 11.1125 20.8 11.1125 18.325C11.1125 16.3 12.8375 14.65 14.9625 14.65C17.0875 14.65 18.8125 16.3 18.8125 18.325C18.8125 19.6625 19.975 20.75 21.4125 20.75C22.85 20.75 24.0125 19.6625 24.0125 18.325C24.0125 13.6125 19.95 9.7875 14.95 9.7875C11.4 9.7875 8.14998 11.7625 6.68748 14.825C6.19998 15.8375 5.94998 17.025 5.94998 18.325C5.94998 19.3 6.03748 20.8375 6.78748 22.8375C6.91248 23.1625 6.74998 23.525 6.42498 23.6375C6.09998 23.7625 5.73748 23.5875 5.62498 23.275C5.01248 21.6375 4.71248 20.0125 4.71248 18.325C4.71248 16.825 4.99998 15.4625 5.56248 14.275C7.22498 10.7875 10.9125 8.525 14.95 8.525C20.6375 8.525 25.2625 12.9125 25.2625 18.3125C25.2625 20.3375 23.5375 21.9875 21.4125 21.9875C19.2875 21.9875 17.5625 20.3375 17.5625 18.3125C17.5625 16.975 16.4 15.8875 14.9625 15.8875C13.525 15.8875 12.3625 16.975 12.3625 18.3125C12.3625 20.45 13.1875 22.45 14.7 23.95C15.8875 25.125 17.025 25.775 18.7875 26.2625C19.125 26.35 19.3125 26.7 19.225 27.025C19.1625 27.3125 18.9 27.5 18.6375 27.5Z"
        fill="#1D7CA3"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_191_6971">
        <Rect width={30} height={30} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;