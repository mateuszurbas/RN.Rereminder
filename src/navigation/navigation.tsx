import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { navigationLinking } from "./navigation.linking";
import { NavigationProps } from "./navigation.types";
import { RootNavigator } from "./root/root.navigator";

export const Navigation = ({ colorScheme }: NavigationProps) => {
  return (
    <NavigationContainer
      linking={navigationLinking}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
