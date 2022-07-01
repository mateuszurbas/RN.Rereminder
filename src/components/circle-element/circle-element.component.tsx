import React from "react";
import { useAnimatedStyle, useDerivedValue, useSharedValue } from "react-native-reanimated";
import { calcSumDegree } from "@components/clock/clock.utils";
import { Container, getContainerAnimatedStyle } from "./circle-element.styles";
import { ClockPointProps } from "./circle-element.types";

export const CircleElement = ({
  degree,
  shiftDegree = useSharedValue(0),
  radius,
  rotation = false,
  children,
}: ClockPointProps) => {
  const sumDegree = useDerivedValue(() => calcSumDegree([degree, shiftDegree.value]));

  const containerStyle = useAnimatedStyle(() =>
    getContainerAnimatedStyle(sumDegree, radius, rotation),
  );

  return <Container style={[containerStyle]}>{children}</Container>;
};
