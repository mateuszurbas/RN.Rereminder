import React from "react";
import { View } from "react-native";
import { ClockPoint } from "@components/clock-point";
import { Circle } from "./clock.styles";
import { ClockProps } from "./clock.types";

export const Clock = ({ shiftDegree, points, radius }: ClockProps) => {
  return (
    <View>
      <Circle radius={radius}>
        {points.map(({ text, degree, onPress }) => (
          <ClockPoint
            key={degree}
            clockRadius={radius}
            degree={degree}
            text={text}
            shiftDegree={shiftDegree}
            onPress={onPress}
          />
        ))}
      </Circle>
    </View>
  );
};
