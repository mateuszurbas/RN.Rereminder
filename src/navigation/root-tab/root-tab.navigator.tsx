import { CommonIcon } from "@components/common-icon";
import { Colors } from "@constants";
import { useColorScheme } from "@hooks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardScreen } from "@screens/dashboard";
import { OptionsScreen } from "@screens/options";
import React from "react";
import { RootTabParamList, RootTabScreenProps } from "./root-tab.types";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const RootTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <RootTab.Navigator
      initialRouteName="Dasboard"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <RootTab.Screen
        name="Dasboard"
        component={DashboardScreen}
        options={({ navigation }: RootTabScreenProps<"Dasboard">) => ({
          title: "Dashboard",
          tabBarIcon: ({ color }) => <CommonIcon name="code" color={color} />,
        })}
      />
      <RootTab.Screen
        name="Options"
        component={OptionsScreen}
        options={{
          title: "Options",
          tabBarIcon: ({ color }) => <CommonIcon name="code" color={color} />,
        }}
      />
    </RootTab.Navigator>
  );
};
