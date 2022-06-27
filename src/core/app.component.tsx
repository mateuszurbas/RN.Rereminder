import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "@hooks";
import { Navigation } from "@navigation";
import { GestureHandler } from "./app.styles";

export const CoreApp = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <GestureHandler>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </GestureHandler>
    </SafeAreaProvider>
  );
};
