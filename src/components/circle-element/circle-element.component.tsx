import React from "react";
import { useAnimatedStyle, useDerivedValue } from "react-native-reanimated";
import { Container } from "./circle-element.styles";
import { ClockPointProps } from "./circle-element.types";

export const CircleElement = ({
  degree,
  shiftDegree,
  radius,
  rotation = false,
  childern,
}: ClockPointProps) => {
  const sumDegree = useDerivedValue(() => {
    const temp = (shiftDegree.value + degree) % 360;
    return temp > 0 ? temp : 360 + temp;
  });

  const containerStyle = useAnimatedStyle(() => {
    const radian = (sumDegree.value * Math.PI) / 180;
    const r = radius;
    const translateX = r * Math.cos(radian) + radius;
    const translateY = r * Math.sin(radian);
    const rotate = `${sumDegree.value}deg`;

    return {
      position: "absolute",
      transform: [{ translateX }, { translateY }, { rotate: rotation ? rotate : "0deg" }],
    };
  });

  return <Container style={containerStyle}>{childern}</Container>;
};
