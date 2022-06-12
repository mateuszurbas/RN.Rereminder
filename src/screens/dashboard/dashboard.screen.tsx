import { RootTabScreenProps } from "@navigation";
import { Button, StyleSheet } from "react-native";
import { ScreenView } from "../../components/screen-view/screen-view.component";

export const DashboardScreen = ({
  navigation,
}: RootTabScreenProps<"Dasboard">) => {
  return (
    <ScreenView style={styles.container}>
      <Button title="Modal" onPress={() => navigation.navigate("Modal")} />
      <Button title="Tab 2" onPress={() => navigation.navigate("Options")} />
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
