import React from "react";
import { useAnimatedStyle, useDerivedValue } from "react-native-reanimated";
import { Circle, Container } from "./clock-tick.styles";
import { ClockTickProps } from "./clock-tick.types";

export const ClockTick = ({ degree, shiftDegree, clockRadius }: ClockTickProps) => {
  const isHour = degree % 15 === 0;

  const sumDegree = useDerivedValue(() => {
    const temp = (shiftDegree.value + degree) % 360;
    return temp > 0 ? temp : 360 + temp;
  });

  const containerStyle = useAnimatedStyle(() => {
    const radian = (sumDegree.value * Math.PI) / 180;
    const halfPointSize = 1;
    const r = clockRadius - 30;
    const translateX = r * Math.cos(radian) + clockRadius - halfPointSize;
    const translateY = r * Math.sin(radian);
    const rotate = `${sumDegree.value}deg`;

    return {
      position: "absolute",
      transform: [{ translateX }, { translateY }, { rotate }],
    };
  });

  return (
    <Container
      style={[
        containerStyle,
        { flexDirection: "row", justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Circle
        style={{
          width: isHour ? 9 : 3,
          marginLeft: isHour ? -6 : 0,
          height: 2,
          borderRadius: isHour ? 4 : 4,
        }}
      />
    </Container>
  );
};
