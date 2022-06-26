import React from "react";
import { Colors } from "@constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommonIcon } from "@components/common-icon";
import { useColorScheme } from "@hooks";
import { DashboardScreen } from "@screens/dashboard";
import { OptionsScreen } from "@screens/options";
import { RootTabParamList } from "./root-tab.types";

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
        name="Note"
        component={OptionsScreen}
        options={() => ({
          // options={({ navigation }: RootTabScreenProps<"Dasboard">) => ({
          title: "Note",
          tabBarIcon: ({ color }) => (
            <CommonIcon name="tag" color={color} size={25} style={{ marginBottom: -3 }} />
          ),
        })}
      />
      <RootTab.Screen
        name="Dasboard"
        component={DashboardScreen}
        options={() => ({
          // options={({ navigation }: RootTabScreenProps<"Dasboard">) => ({
          title: "",
          tabBarIcon: ({ color }) => (
            <CommonIcon name="spinner" color={color} size={35} style={{ marginBottom: -15 }} />
          ),
        })}
      />
      <RootTab.Screen
        name="Options"
        component={OptionsScreen}
        options={{
          title: "Options",
          tabBarIcon: ({ color }) => (
            <CommonIcon name="gear" color={color} size={25} style={{ marginBottom: -3 }} />
          ),
        }}
      />
    </RootTab.Navigator>
  );
};
