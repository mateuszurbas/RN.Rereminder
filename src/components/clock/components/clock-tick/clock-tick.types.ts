import { SharedValue } from "react-native-reanimated";

export type ClockTickProps = {
  degree: number;
  shiftDegree: SharedValue<number>;
  clockRadius: number;
};
