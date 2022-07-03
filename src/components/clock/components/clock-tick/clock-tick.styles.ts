import { ViewStyle } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";
import styled from "styled-components/native";

type CircleProps = {
  isLine: boolean;
  tickColor: string;
};

export const Container = styled(Animated.View)``;

export const Circle = styled(Animated.View)<CircleProps>`
  width: ${({ isLine }) => (isLine ? 9 : 3)}px;
  margin-left: ${({ isLine }) => (isLine ? -6 : 0)}px;
  height: 2px;
  border-radius: 4px;
  background-color: ${({ tickColor }) => tickColor};
`;

export const getContainerAnimatedStyle = (sumDegree: SharedValue<number>): ViewStyle => {
  "worklet";
  return {
    transform: [{ rotate: `${sumDegree.value}deg` }],
  };
};
