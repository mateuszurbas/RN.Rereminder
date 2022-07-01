import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useDerivedValue } from "react-native-reanimated";
import { CircleElement } from "@components/circle-element";
import { CommonText } from "@components/common-text";
import { useThemeColor } from "@hooks";
import { getSumDegree } from "../clock.utils";
import {
  getCircleAnimatedStyle,
  getContentAnimatedStyle,
  Point,
  Content,
} from "./circle-point.styles";
import { ClockPointProps } from "./circle-point.types";

export const ClockPoint = ({ point, shiftDegree, clockRadius }: ClockPointProps) => {
  const radius = clockRadius + 20;
  const pointBackgroundColor = useThemeColor("tint");

  const sumDegree = useDerivedValue(() => getSumDegree([shiftDegree.value, point.degree]));
  const circleAnimatedStyle = useAnimatedStyle(() => getCircleAnimatedStyle(sumDegree));
  const contentAnimatedStyle = useAnimatedStyle(() => getContentAnimatedStyle(sumDegree));

  return (
    <CircleElement degree={point.degree} shiftDegree={shiftDegree} radius={radius}>
      <Animated.View style={contentAnimatedStyle}>
        <Content onPress={point.onPress}>
          <Point backgroundColor={pointBackgroundColor} style={circleAnimatedStyle} />
          <CommonText>{point.title}</CommonText>
        </Content>
      </Animated.View>
    </CircleElement>
  );
};
