import React from "react";
import { View as DefaultView } from "react-native";
import { useThemeColor } from "@hooks";
import { ScreenViewProps } from "./screen-view.types";

export const ScreenView = ({ style, lightColor, darkColor, ...otherProps }: ScreenViewProps) => {
  const backgroundColor = useThemeColor("background", { light: lightColor, dark: darkColor });

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
