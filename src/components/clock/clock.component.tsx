import React, { useMemo } from "react";
import { CircleElement } from "@components/circle-element";
import { StarsSvgIcon } from "@components/common-icon";
import { SunSvgIcon } from "@components/common-icon/svg/sun.icon";
import { ProgressCircle } from "@components/progress-circle";
import { Container } from "./clock.styles";
import { ClockProps } from "./clock.types";
import { generateTickTimeValues as generateTimeValues } from "./clock.utils";
import { ClockPoint } from "./components/clock-point/circle-point.component";
import { ClockTime } from "./components/clock-time/clock-time.component";

export const Clock = ({ shiftDegree, points, radius, style }: ClockProps) => {
  const iconRadius = radius - 70;
  const pastProgressRadius = radius - 10;
  const activeProgressRadius = radius;
  const futureProgressRadius = radius + 10;
  const height = 2 * radius + 100;

  const times = useMemo(
    () =>
      generateTimeValues().map((time) => (
        <ClockTime
          key={`tick-time-${time}`}
          degree={time}
          clockRadius={radius}
          shiftDegree={shiftDegree}
        />
      )),
    [],
  );

  const allPoints = points.map((point) => (
    <ClockPoint key={point.title} point={point} clockRadius={radius} shiftDegree={shiftDegree} />
  ));

  return (
    <Container style={[style, { height }]}>
      {times}
      {allPoints}

      <ProgressCircle
        size={pastProgressRadius * 2}
        strokeWidth={5}
        progress={45}
        pgColor={"#F93943"}
        bgColor={"lightgray"}
      />

      <ProgressCircle
        size={activeProgressRadius * 2}
        strokeWidth={5}
        progress={30}
        pgColor={"#FAC739"}
      />

      <ProgressCircle
        size={futureProgressRadius * 2}
        strokeWidth={5}
        progress={20}
        pgColor={"#2f95dc"}
      />

      <CircleElement degree={180} shiftDegree={shiftDegree} radius={iconRadius}>
        <SunSvgIcon width={40} />
      </CircleElement>

      <CircleElement degree={0} shiftDegree={shiftDegree} radius={iconRadius}>
        <StarsSvgIcon width={40} />
      </CircleElement>
    </Container>
  );
};
