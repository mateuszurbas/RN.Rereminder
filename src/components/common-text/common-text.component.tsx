import { useThemeColor } from "../../hooks/use-theme-color";
import { Text as DefaultText } from "react-native";
import { CommonTextProps, TextProps } from "./common-text.types";

const Text = ({ style, lightColor, darkColor, ...otherProps }: TextProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const CommonText = (props: CommonTextProps) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
};
