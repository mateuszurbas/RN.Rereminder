import React from "react";
import { CircleElement } from "@components/circle-element";
import { Circle } from "./clock-tick.styles";
import { ClockTickProps } from "./clock-tick.types";

export const ClockTick = ({ degree, shiftDegree, clockRadius }: ClockTickProps) => {
  const isHour = degree % 15 === 0;

  return (
    <CircleElement
      degree={degree}
      shiftDegree={shiftDegree}
      radius={clockRadius - 5}
      rotation={true}
    >
      <Circle
        style={{
          width: isHour ? 9 : 3,
          marginLeft: isHour ? -6 : 0,
          height: 2,
          borderRadius: isHour ? 4 : 4,
        }}
      />
    </CircleElement>
  );
};
