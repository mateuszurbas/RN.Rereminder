import React from "react";
import { Button } from "react-native";
import { RootTabScreenProps } from "@navigation";
import { Container } from "./dashboard.styles";

export const DashboardScreen = ({ navigation }: RootTabScreenProps<"Dasboard">) => {
  return (
    <Container>
      <Button title="Modal" onPress={() => navigation.navigate("Modal")} />
      <Button title="Tab 2" onPress={() => navigation.navigate("Options")} />
    </Container>
  );
};
