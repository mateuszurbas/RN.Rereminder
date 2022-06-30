import { ReactNode } from "react";
import { SharedValue } from "react-native-reanimated";

export type ClockPointProps = {
  degree: number;
  shiftDegree: SharedValue<number>;
  radius: number;
  childern: ReactNode;
  rotation: boolean;
};
