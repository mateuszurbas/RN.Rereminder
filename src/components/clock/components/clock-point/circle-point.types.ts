import { SharedValue } from "react-native-reanimated";
import { Point } from "@components/clock/clock.types";

export type ClockPointProps = {
  point: Point;
  shiftDegree: SharedValue<number>;
  clockRadius: number;
};
