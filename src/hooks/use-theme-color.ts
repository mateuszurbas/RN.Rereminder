import { Colors } from "../constants/colors";
import { useColorScheme } from "./use-color-scheme";

export const useThemeColor = (
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) => {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  return colorFromProps ? colorFromProps : Colors[theme][colorName];
};
