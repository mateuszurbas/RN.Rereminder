import { Button, StyleSheet } from "react-native";
import { ScreenView } from "../../components/screen-view/screen-view.component";

import { RootTabScreenProps } from "../../navigation/root-tab/root-tab.types";

export const OptionsScreen = ({
  navigation,
}: RootTabScreenProps<"Options">) => {
  return (
    <ScreenView style={styles.container}>
      <Button title="Modal" onPress={() => navigation.navigate("Modal")} />
      <Button title="Tab 1" onPress={() => navigation.navigate("Dasboard")} />
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
