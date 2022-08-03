import React, { useEffect } from "react";
import * as dayjs from "dayjs";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import {
  ActiveCircle,
  Circle,
  Container,
  DayNumber,
  getTranslateYAnimatedStyle,
  getScaleAnimatedStyle,
  WeekDayText,
  WeekDay,
} from "./day-option.styles";
import { DayOptionProps } from "./day-option.types";

export const DayOption = ({ date, isActive, onPress }: DayOptionProps) => {
  const dayjsDate = dayjs.default(date);
  const animationValue = useSharedValue(0);

  useEffect(() => {
    animationValue.value = isActive ? 1 : 0;
  }, [isActive]);

  const activeCircleAnimatedStyle = useAnimatedStyle(() => getScaleAnimatedStyle(animationValue));
  const circleAnimatedStyle = useAnimatedStyle(() => getTranslateYAnimatedStyle(animationValue));

  const renderWeekDay = isActive && (
    <WeekDay>
      <WeekDayText>{dayjsDate.format("ddd")}</WeekDayText>
    </WeekDay>
  );

  return (
    <Container onPress={onPress}>
      <Circle style={circleAnimatedStyle}>
        <DayNumber>{dayjsDate.format("DD")}</DayNumber>
        {renderWeekDay}
      </Circle>
      <ActiveCircle style={activeCircleAnimatedStyle} />
    </Container>
  );
};
