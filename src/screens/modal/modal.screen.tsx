import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { Container } from "./modal.styles";

export const ModalScreen = () => {
  return (
    <Container>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Container>
  );
};
