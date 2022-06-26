import { SharedValue } from "react-native-reanimated";

export type Point = {
  degree: number;
  text: string;
  onPress: VoidFunction;
};

export type ClockProps = {
  radius: number;
  shiftDegree: SharedValue<number>;
  points: Point[];
};
