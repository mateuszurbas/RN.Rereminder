import React from "react";
import { useAnimatedStyle } from "react-native-reanimated";
import { CircleElement } from "@components/circle-element";
import { Circle, Container, getContainerAnimatedStyle } from "./clock-tick.styles";
import { ClockTickProps } from "./clock-tick.types";

export const ClockTick = ({ degree, shiftDegree, clockRadius }: ClockTickProps) => {
  const isHour = degree % 15 === 0;
  const tickCircleRadius = clockRadius - 5;
  const containerStyle = useAnimatedStyle(() => getContainerAnimatedStyle(shiftDegree));
  return (
    <Container style={containerStyle}>
      <CircleElement degree={degree} radius={tickCircleRadius} rotation={true}>
        <Circle isHour={isHour} />
      </CircleElement>
    </Container>
  );
};
