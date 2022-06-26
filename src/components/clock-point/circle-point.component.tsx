import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAnimatedStyle } from "react-native-reanimated";
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

  const animatedStyles = useAnimatedStyle(() => {
    const allDegree = (animatedValue.value + degree) % 360;
    const radian = (allDegree * Math.PI) / 180;

    // + radius becouse we want to move point to circle area
    const translateX = clockRadius * Math.cos(radian) + clockRadius;
    const translateY = clockRadius * Math.sin(radian);
    return {
      position: "absolute",
      transform: [{ translateX }, { translateY }],
    };
  });

  return (
    <Container style={animatedStyles}>
      <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center" }}>
        <Circle radius={10} style={{ backgroundColor: circleColor }} />
        <CommonText>{text}</CommonText>
      </TouchableOpacity>
    </Container>
  );
};
