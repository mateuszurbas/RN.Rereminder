import React, { useMemo } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue } from "react-native-reanimated";
import { Clock, Point } from "@components/clock";
import { RootTabScreenProps } from "@navigation";
import { mockedPoints } from "./dashboard.mock";

const radius = 200;

export const DashboardScreen = ({ navigation }: RootTabScreenProps<"Dasboard">) => {
  const points: Point[] = useMemo(
    () => mockedPoints.map((point) => ({ ...point, onPress: () => navigation.navigate("Modal") })),
    [mockedPoints],
  );

  const degree = useSharedValue(0);
  const initDegree = useSharedValue(0);

  const dragGesture = Gesture.Pan()
    .averageTouches(true)
    .onStart(() => {
      initDegree.value = degree.value;
      console.log(initDegree.value);
    })
    .onUpdate((e) => {
      const value = (initDegree.value + e.translationY) % 360;
      degree.value = value;
    });

  return (
    <Animated.View>
      <GestureDetector gesture={dragGesture}>
        <View style={{ height: "100%", justifyContent: "center", marginLeft: -radius }}>
          <Clock animatedValue={degree} points={points} radius={radius} />
        </View>
      </GestureDetector>
    </Animated.View>
  );
};
