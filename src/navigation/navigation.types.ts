import { ColorSchemeName } from "react-native";
import { RootStackParamList } from "./root/root.types";

export type NavigationProps = {
  colorScheme: ColorSchemeName;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
