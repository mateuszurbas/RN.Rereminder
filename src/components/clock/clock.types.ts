import { SharedValue } from "react-native-reanimated";

export type Point = {
  degree: number;
  text: string;
  onPress: VoidFunction;
};

export type ClockProps = {
  radius: number;
  animatedValue: SharedValue<number>;
  points: Point[];
};
