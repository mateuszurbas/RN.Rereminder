import React from "react";
import { ClockProps } from "./clock.types";
import { generateTickTimeValues, generateTickValues } from "./clock.utils";
import { ClockPoint } from "./components/clock-point/circle-point.component";
import { ClockTickTime } from "./components/clock-tick-time/clock-tick-time.component";
import { ClockTick } from "./components/clock-tick/clock-tick.component";

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
          point={point}
          clockRadius={radius}
          shiftDegree={shiftDegree}
        />
      ))}
    </>
  );
};
