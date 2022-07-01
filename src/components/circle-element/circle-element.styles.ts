import { ViewStyle } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  position: absolute;
`;

export const getContainerAnimatedStyle = (
  sumDegree: SharedValue<number>,
  radius: number,
  rotation: boolean,
): ViewStyle => {
  "worklet";
  const radian = (sumDegree.value * Math.PI) / 180;
  const r = radius;
  const translateX = r * Math.cos(radian) + radius;
  const translateY = r * Math.sin(radian);
  const rotate = `${sumDegree.value}deg`;

  return {
    transform: [{ translateX }, { translateY }, { rotate: rotation ? rotate : "0deg" }],
  };
};
