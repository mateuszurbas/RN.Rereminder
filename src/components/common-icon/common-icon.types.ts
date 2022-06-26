import { FontAwesome } from "@expo/vector-icons";
import { ViewStyle } from "react-native";

export type IconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size: number;
  style?: ViewStyle;
};
