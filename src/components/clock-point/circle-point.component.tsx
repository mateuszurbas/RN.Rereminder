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
  shiftDegree,
  clockRadius,
  onPress,
}: ClockPointProps) => {
  const circleColor = useThemeColor("tint");

  const sumDegree = useDerivedValue(() => {
    const temp = (shiftDegree.value + degree) % 360;
    return temp > 0 ? temp : 360 + temp;
  });

  const containerStyle = useAnimatedStyle(() => {
    const radian = (sumDegree.value * Math.PI) / 180;
    const halfPointSize = 15;
    const r = clockRadius + 30;
    const translateX = r * Math.cos(radian) + clockRadius - halfPointSize;
    const translateY = r * Math.sin(radian);

    return {
      position: "absolute",
      transform: [{ translateX }, { translateY }],
    };
  });

  const circleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      sumDegree.value,
      [0, 100, 260, 360],
      [1, 0.4, 0.4, 1],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <Container style={containerStyle}>
      <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center" }}>
        <Circle style={[{ backgroundColor: circleColor }, circleStyle]} />
        <CommonText>{text}</CommonText>
      </TouchableOpacity>
    </Container>
  );
};
