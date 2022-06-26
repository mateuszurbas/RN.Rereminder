import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { CommonText } from "@components/common-text";
import { useThemeColor } from "@hooks";
import { Circle, Container } from "./circle-point.styles";
import { ClockPointProps } from "./circle-point.types";

export const ClockPoint = ({
  degree,
  text,
  animatedValue,
  clockRadius,
  onPress,
}: ClockPointProps) => {
  const circleColor = useThemeColor("tint");
  const deg = useDerivedValue(() => {
    const temp = (animatedValue.value + degree) % 360;
    return temp > 0 ? temp : 360 + temp;
  });

  const animatedPositionStyles = useAnimatedStyle(() => {
    const radian = (deg.value * Math.PI) / 180;

    const translateX = clockRadius * Math.cos(radian) + clockRadius - 15;
    const translateY = clockRadius * Math.sin(radian);
    return {
      position: "absolute",
      transform: [{ translateX }, { translateY }],
    };
  });

  const animatedSizeStyles = useAnimatedStyle(() => {
    const scale = interpolate(deg.value, [0, 100, 260, 360], [1, 0.5, 0.5, 1], Extrapolation.CLAMP);
    return {
      transform: [{ scale }],
    };
  });

  return (
    <Container style={animatedPositionStyles}>
      <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center" }}>
        <Circle style={[{ backgroundColor: circleColor }, animatedSizeStyles]} />
        <CommonText>{text}</CommonText>
      </TouchableOpacity>
    </Container>
  );
};
