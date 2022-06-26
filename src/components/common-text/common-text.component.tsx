import React from "react";
import { Text } from "react-native";
import { useThemeColor } from "@hooks";
import { CommonTextProps } from "./common-text.types";

export const CommonText = ({ lightColor, darkColor, style, ...otherProps }: CommonTextProps) => {
  const color = useThemeColor("text", { light: lightColor, dark: darkColor });

  return <Text {...otherProps} style={[{ color }, style, { fontFamily: "space-mono" }]} />;
};
