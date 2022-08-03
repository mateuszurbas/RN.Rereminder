import React, { useMemo } from "react";
import { View } from "react-native";
import { CircleElement } from "@components/circle-element";
import { StarsSvgIcon } from "@components/common-icon";
import { SunSvgIcon } from "@components/common-icon/svg/sun.icon";
import { Container } from "./clock.styles";
import { ClockProps } from "./clock.types";
import { generateTickTimeValues as generateTimeValues } from "./clock.utils";
import { ClockPoint } from "./components/clock-point/circle-point.component";
import { ClockTime } from "./components/clock-time/clock-time.component";

export const Clock = ({ shiftDegree, points, radius, style }: ClockProps) => {
  const iconRadius = radius - 70;
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

      <View
        style={{
          width: 320,
          height: 320,
          borderRadius: 160,
          borderColor: "#2f95dc",
          borderWidth: 5,
          position: "absolute",
        }}
      />

      <View
        style={{
          width: 300,
          height: 300,
          borderRadius: 150,
          borderColor: "#FAC739",
          borderWidth: 5,
          position: "absolute",
        }}
      />

      <View
        style={{
          width: 280,
          height: 280,
          borderRadius: 140,
          borderColor: "#F93943",
          borderWidth: 5,
          position: "absolute",
        }}
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
