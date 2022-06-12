import { useThemeColor } from "@hooks";
import { View as DefaultView } from "react-native";
import { ScreenViewProps } from "./screen-view.types";

export const ScreenView = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ScreenViewProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
