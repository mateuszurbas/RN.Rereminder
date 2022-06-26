import { SharedValue } from "react-native-reanimated";

export type ClockPointProps = {
  degree: number;
  text: string;
  onPress: VoidFunction;
  animatedValue: SharedValue<number>;
  clockRadius: number;
};
