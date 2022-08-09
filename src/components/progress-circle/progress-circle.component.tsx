import React from "react";
import { View } from "react-native";
import { Svg, Circle } from "react-native-svg";
import { ProgressCircleProps } from "./progress-circle.types";

export const ProgressCircle = ({
  size,
  strokeWidth,
  progress,
  bgColor,
  pgColor,
}: ProgressCircleProps) => {
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - progress;

  return (
    <View style={{ position: "absolute" }}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={bgColor || "#f2f2f2"}
          strokeWidth={strokeWidth}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />

        {/* Progress Circle */}
        <Circle
          stroke={pgColor || "#3b5998"}
          strokeWidth={strokeWidth}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
        />
      </Svg>
    </View>
  );
};
