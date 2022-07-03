import React from "react";
import Animated, { useAnimatedStyle, useDerivedValue } from "react-native-reanimated";
import { CircleElement } from "@components/circle-element";
import { CommonText } from "@components/common-text";
import { useThemeColor } from "@hooks";
import { formatDateToTime, calcSumDegree, calcTimeToDegree } from "../../clock.utils";
import {
  getCircleAnimatedStyle,
  getContentAnimatedStyle,
  Point,
  Content,
  Details,
} from "./circle-point.styles";
import { ClockPointProps } from "./circle-point.types";

export const ClockPoint = ({ point, shiftDegree, clockRadius }: ClockPointProps) => {
  const radius = clockRadius + 30;
  const pointBackgroundColor = useThemeColor("tint");

  const degree = calcTimeToDegree(point.time);
  const sumDegree = useDerivedValue(() => calcSumDegree([shiftDegree.value, degree]));
  const circleAnimatedStyle = useAnimatedStyle(() => getCircleAnimatedStyle(sumDegree));
  const contentAnimatedStyle = useAnimatedStyle(() => getContentAnimatedStyle(sumDegree));

  return (
    <CircleElement degree={degree} shiftDegree={shiftDegree} radius={radius}>
      <Animated.View style={contentAnimatedStyle}>
        <Content onPress={point.onPress}>
          <Point backgroundColor={pointBackgroundColor} style={circleAnimatedStyle} />
          <Details>
            <CommonText>{formatDateToTime(point.time)}</CommonText>
            <CommonText>{point.title}</CommonText>
          </Details>
        </Content>
      </Animated.View>
    </CircleElement>
  );
};
