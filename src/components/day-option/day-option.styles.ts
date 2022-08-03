import { ViewStyle } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";
import { CommonText } from "@components/common-text";

export const Container = styled.TouchableOpacity`
  margin: 0 10px;
  align-items: center;
`;

export const Circle = styled(Animated.View)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: #e4e4e4;
`;

export const DayNumber = styled(CommonText)`
  font-size: 15px;
`;

export const WeekDay = styled(Animated.View)``;

export const WeekDayText = styled(CommonText)`
  font-size: 10px;
  font-weight: bold;
`;

export const ActiveCircle = styled(Animated.View)`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: #2f95dc;
  margin-top: 10px;
  position: absolute;
  bottom: 0;
`;

export const getScaleAnimatedStyle = (animatedValue: SharedValue<number>): ViewStyle => {
  "worklet";
  const scale = withTiming(animatedValue.value);

  return {
    transform: [{ scale }],
  };
};

export const getTranslateYAnimatedStyle = (animatedValue: SharedValue<number>): ViewStyle => {
  "worklet";
  const translateY = withTiming(
    interpolate(animatedValue.value, [0, 1], [0, -15], Extrapolation.CLAMP),
  );

  return {
    transform: [{ translateY }],
  };
};
