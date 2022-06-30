import React from "react";
import { ClockPoint } from "@components/clock-point";
import { ClockProps } from "./clock.types";
import { ClockTickTime } from "./components/clock-tick-time/clock-tick-time.component";
import { ClockTick } from "./components/clock-tick/clock-tick.component";

const generateTickValues = () =>
  Array(96 + 1)
    .fill(null)
    .map((_, idx) => idx * 3.75);

const generateTickTimeValues = () =>
  Array(11 + 1)
    .fill(null)
    .map((_, idx) => idx * 30);

export const Clock = ({ shiftDegree, points, radius }: ClockProps) => {
  const ticks = generateTickValues();
  const tickTime = generateTickTimeValues();

  return (
    <>
      {ticks.map((tick) => (
        <ClockTick
          key={`tick-${tick}`}
          degree={tick}
          clockRadius={radius}
          shiftDegree={shiftDegree}
        />
      ))}

      {tickTime.map((tick) => (
        <ClockTickTime
          key={`tick-time-${tick}`}
          degree={tick}
          clockRadius={radius}
          shiftDegree={shiftDegree}
        />
      ))}

      {points.map((point) => (
        <ClockPoint
          key={point.title}
          clockRadius={radius}
          point={point}
          shiftDegree={shiftDegree}
        />
      ))}
    </>
  );
};
