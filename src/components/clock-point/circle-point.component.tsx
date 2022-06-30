import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { CommonText } from "@components/common-text";
import { useThemeColor } from "@hooks";
import { Circle, Container } from "./circle-point.styles";
import { ClockPointProps } from "./circle-point.types";

export const ClockPoint = ({ point, shiftDegree, clockRadius }: ClockPointProps) => {
  const circleColor = useThemeColor("tint");

  const sumDegree = useDerivedValue(() => {
    const temp = (shiftDegree.value + point.degree) % 360;
    return temp > 0 ? temp : 360 + temp;
  });

  const containerStyle = useAnimatedStyle(() => {
    const radian = (sumDegree.value * Math.PI) / 180;
    const halfPointSize = 15;
    const r = clockRadius + 30;
    const translateX = r * Math.cos(radian) + clockRadius - halfPointSize;
    const translateY = r * Math.sin(radian);

    return {
      position: "absolute",
      transform: [{ translateX }, { translateY }],
    };
  });

  const circleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      sumDegree.value,
      [0, 90, 180, 270, 360],
      [1, 0.4, 0.4, 0.4, 1],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ scale }],
    };
  });

  const contentStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      sumDegree.value,
      [0, 90, 100, 180, 260, 270, 360],
      [1, 0.2, 0, 0, 0, 0.2, 1],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
    };
  });

  return (
    <Container style={containerStyle}>
      <Animated.View style={contentStyle}>
        <TouchableOpacity
          onPress={point.onPress}
          style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}
        >
          <Circle style={[{ backgroundColor: circleColor }, circleStyle]} />
          <CommonText>{point.title}</CommonText>
        </TouchableOpacity>
      </Animated.View>
    </Container>
  );
};
