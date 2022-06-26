import React from "react";
import { View } from "react-native";
import { ClockPoint } from "@components/clock-point";
import { Circle } from "./clock.styles";
import { ClockProps } from "./clock.types";

export const Clock = ({ animatedValue, points, radius }: ClockProps) => {
  return (
    <View>
      <Circle radius={radius}>
        {points.map(({ text, degree, onPress }) => (
          <ClockPoint
            key={degree}
            clockRadius={radius}
            degree={degree}
            text={text}
            animatedValue={animatedValue}
            onPress={onPress}
          />
        ))}
      </Circle>
    </View>
  );
};
