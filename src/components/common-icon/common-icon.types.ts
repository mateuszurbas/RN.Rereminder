import { FontAwesome } from "@expo/vector-icons";

export type IconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
};
