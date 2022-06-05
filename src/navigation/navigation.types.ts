import { ColorSchemeName } from "react-native";
import { RootStackParamList } from "./root/root.types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type NavigationProps = {
  colorScheme: ColorSchemeName;
};
