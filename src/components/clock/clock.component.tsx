import React, { useMemo } from "react";
import { CircleElement } from "@components/circle-element";
import { StarsSvgIcon } from "@components/common-icon";
import { SunSvgIcon } from "@components/common-icon/svg/sun.icon";
import { ClockProps } from "./clock.types";
import { generateTickTimeValues as generateTimeValues, generateTickValues } from "./clock.utils";
import { ClockPoint } from "./components/clock-point/circle-point.component";
import { ClockTick } from "./components/clock-tick/clock-tick.component";
import { ClockTime } from "./components/clock-time/clock-time.component";

export const Clock = ({ shiftDegree, points, radius }: ClockProps) => {
  const iconRadius = radius - 70;

  const ticks = useMemo(
    () =>
      generateTickValues().map((tick) => (
        <ClockTick
          key={`tick-${tick}`}
          degree={tick}
          clockRadius={radius}
          shiftDegree={shiftDegree}
        />
      )),
    [],
  );

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
    <>
      {ticks}
      {times}
      {allPoints}

      <CircleElement degree={180} shiftDegree={shiftDegree} radius={iconRadius}>
        <SunSvgIcon width={40} />
      </CircleElement>

      <CircleElement degree={0} shiftDegree={shiftDegree} radius={iconRadius}>
        <StarsSvgIcon width={40} />
      </CircleElement>
    </>
  );
};
