import { Text as DefaultText } from "react-native";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type CommonTextProps = ThemeProps & DefaultText["props"];
