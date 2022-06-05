import { Text as DefaultText } from "react-native";

export type TextProps = ThemeProps & DefaultText["props"];

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type CommonTextProps = ThemeProps & DefaultText["props"];
