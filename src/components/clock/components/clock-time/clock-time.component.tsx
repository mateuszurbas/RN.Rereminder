import React from "react";
import { CircleElement } from "@components/circle-element";
import { CommonText } from "@components/common-text";
import { ClockTimeProps } from "./clock-time.types";

export const ClockTime = ({ degree, shiftDegree, clockRadius }: ClockTimeProps) => {
  const isBold = degree % 90 === 0;
  const tickTimeRadius = clockRadius - 30;
  const timeText = (degree / 30) * 2;

  return (
    <CircleElement degree={degree} shiftDegree={shiftDegree} radius={tickTimeRadius}>
      <CommonText style={{ fontWeight: isBold ? "bold" : "normal" }}>{timeText}</CommonText>
    </CircleElement>
  );
};
