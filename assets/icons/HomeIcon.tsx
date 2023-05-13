import { View } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";

const HomeIcon = (props: SvgProps) => {
  return (
    <View>
      <Svg width="22" height="21" viewBox="0 0 22 21" fill="none">
        <Path
          d="M11 0.775391L10.4235 1.31013L0 11.4289L1.1538 12.549L2.18012 11.5504V20.5507H9.39638V12.767H12.6036V20.5507H19.8199V11.5504L20.847 12.5482L22 11.4289L11.5765 1.31013L11 0.775391ZM11 2.98908L18.2163 9.99441V18.9939H14.2072V11.2102H7.79277V18.9939H3.78373V9.99363L11 2.98908Z"
          fill={props.fill || "#0063F5"}
        />
      </Svg>
    </View>
  );
};

export default HomeIcon;
