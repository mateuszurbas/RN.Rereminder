import React from "react";
import { useAnimatedStyle } from "react-native-reanimated";
import { CircleElement } from "@components/circle-element";
import { useThemeColor } from "@hooks";
import { Circle, Container, getContainerAnimatedStyle } from "./clock-tick.styles";
import { ClockTickProps } from "./clock-tick.types";

export const ClockTick = ({ degree, shiftDegree, clockRadius }: ClockTickProps) => {
  const isLine = degree % 15 === 0;
  const tickColor = useThemeColor("text");
  const tickCircleRadius = clockRadius - 5;
  const containerStyle = useAnimatedStyle(() => getContainerAnimatedStyle(shiftDegree));

  return (
    <Container style={containerStyle}>
      <CircleElement degree={degree} radius={tickCircleRadius} rotation={true}>
        <Circle isLine={isLine} tickColor={tickColor} />
      </CircleElement>
    </Container>
  );
};
