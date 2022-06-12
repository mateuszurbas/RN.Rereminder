import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ModalScreen } from "@screens/modal";
import { BottomTabNavigator } from "../root-tab";
import { RootStackParamList } from "./root.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
