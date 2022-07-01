import React from "react";
import { CircleElement } from "@components/circle-element";
import { Circle } from "./clock-tick.styles";
import { ClockTickProps } from "./clock-tick.types";

export const ClockTick = ({ degree, shiftDegree, clockRadius }: ClockTickProps) => {
  const isHour = degree % 15 === 0;
  const tickCircleRadius = clockRadius - 5;

  return (
    <CircleElement
      degree={degree}
      shiftDegree={shiftDegree}
      radius={tickCircleRadius}
      rotation={true}
    >
      <Circle isHour={isHour} />
    </CircleElement>
  );
};
