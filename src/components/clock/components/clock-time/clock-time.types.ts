import { SharedValue } from "react-native-reanimated";

export type ClockTimeProps = {
  degree: number;
  shiftDegree: SharedValue<number>;
  clockRadius: number;
};
