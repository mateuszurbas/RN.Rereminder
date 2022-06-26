import { Colors } from "../constants/colors";
import { useColorScheme } from "./use-color-scheme";

export const useThemeColor = (
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  props?: { light?: string; dark?: string },
) => {
  const theme = useColorScheme();
  const colorFromProps = props && props[theme];
  return colorFromProps || Colors[theme][colorName];
};
