import React from "react";
import { useAnimatedStyle } from "react-native-reanimated";
import { CircleElement } from "@components/circle-element";
import { checkDegreeIfFullHour } from "@components/clock/clock.utils";
import { useThemeColor } from "@hooks";
import { Circle, Container, getContainerAnimatedStyle } from "./clock-tick.styles";
import { ClockTickProps } from "./clock-tick.types";

export const ClockTick = ({ degree, shiftDegree, clockRadius }: ClockTickProps) => {
  const radius = clockRadius - 5;
  const isLine = checkDegreeIfFullHour(degree);
  const tickColor = useThemeColor("text");
  const containerStyle = useAnimatedStyle(() => getContainerAnimatedStyle(shiftDegree));

  return (
    <Container style={containerStyle}>
      <CircleElement degree={degree} radius={radius} rotation={true}>
        <Circle isLine={isLine} tickColor={tickColor} />
      </CircleElement>
    </Container>
  );
};
