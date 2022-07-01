import { SharedValue } from "react-native-reanimated";

export type ClockPointProps = {
  degree: number;
  shiftDegree?: SharedValue<number>;
  radius: number;
  children: JSX.Element;
  rotation?: boolean;
};
