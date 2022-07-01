import { TouchableOpacity, ViewStyle } from "react-native";
import Animated, { Extrapolation, interpolate, SharedValue } from "react-native-reanimated";
import styled from "styled-components/native";

type PointStyled = {
  backgroundColor: string;
};

export const Container = styled(Animated.View)`
  position: absolute;
`;

export const Content = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Point = styled(Animated.View)<PointStyled>`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Details = styled.View`
  position: absolute;
  left: 30px;
  width: 200px;
`;

export const getCircleAnimatedStyle = (sumDegree: SharedValue<number>): ViewStyle => {
  "worklet";
  const scale = interpolate(
    sumDegree.value,
    [0, 90, 180, 270, 360],
    [1, 0.4, 0.4, 0.4, 1],
    Extrapolation.CLAMP,
  );

  return {
    transform: [{ scale }],
  };
};

export const getContentAnimatedStyle = (sumDegree: SharedValue<number>): ViewStyle => {
  "worklet";
  const opacity = interpolate(
    sumDegree.value,
    [0, 90, 100, 180, 260, 270, 360],
    [1, 0.2, 0, 0, 0, 0.2, 1],
    Extrapolation.CLAMP,
  );

  return {
    opacity,
  };
};
