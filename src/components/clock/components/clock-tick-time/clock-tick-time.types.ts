import { SharedValue } from "react-native-reanimated";

export type ClockTickTimeProps = {
  degree: number;
  shiftDegree: SharedValue<number>;
  clockRadius: number;
};
