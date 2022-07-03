import React, { useMemo } from "react";
import { Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { Clock, Point } from "@components/clock";
import { RootTabScreenProps } from "@navigation";
import { mockedPoints } from "./dashboard.mock";

const screenWidth = Dimensions.get("screen").width;

export const DashboardScreen = ({ navigation }: RootTabScreenProps<"Dasboard">) => {
  const points: Point[] = useMemo(
    () => mockedPoints.map((point) => ({ ...point, onPress: () => navigation.navigate("Modal") })),
    [mockedPoints],
  );

  const shiftDegree = useSharedValue(0);
  const lastShiftDegree = useSharedValue(0);

  const dragGesture = Gesture.Pan()
    .averageTouches(true)
    .onStart(() => {
      lastShiftDegree.value = shiftDegree.value;
    })
    .onUpdate((e) => {
      const value = (lastShiftDegree.value + e.translationY) % 360;
      shiftDegree.value = value;
    });

  return (
    <GestureDetector gesture={dragGesture}>
      <Clock
        shiftDegree={shiftDegree}
        points={points}
        radius={150}
        style={{ marginLeft: -screenWidth }}
      />
    </GestureDetector>
  );
};
