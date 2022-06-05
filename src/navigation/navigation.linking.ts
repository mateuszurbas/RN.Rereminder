/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "./root/root.types";

export const navigationLinking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
};
