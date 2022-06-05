import { View as DefaultView } from "react-native";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ScreenViewProps = ThemeProps & DefaultView["props"];
