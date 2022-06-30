import React from "react";
import { useAnimatedStyle, useDerivedValue } from "react-native-reanimated";
import { CommonText } from "@components/common-text";
import { Container } from "./clock-tick-time.styles";
import { ClockTickTimeProps } from "./clock-tick-time.types";

export const ClockTickTime = ({ degree, shiftDegree, clockRadius }: ClockTickTimeProps) => {
  const isBold = degree % 90 === 0;

  const sumDegree = useDerivedValue(() => {
    const temp = (shiftDegree.value + degree) % 360;
    return temp > 0 ? temp : 360 + temp;
  });

  const containerStyle = useAnimatedStyle(() => {
    const radian = (sumDegree.value * Math.PI) / 180;
    const halfPointSize = 1;
    const r = clockRadius - 60;
    const translateX = r * Math.cos(radian) + clockRadius - halfPointSize;
    const translateY = r * Math.sin(radian);

    return {
      position: "absolute",
      transform: [{ translateX }, { translateY }],
    };
  });

  return (
    <Container style={[containerStyle]}>
      <CommonText style={{ fontWeight: isBold ? "bold" : "normal" }}>
        {(degree / 30) * 2}
      </CommonText>
    </Container>
  );
};
