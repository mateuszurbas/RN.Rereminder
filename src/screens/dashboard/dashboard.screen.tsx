import React, { useMemo, useState } from "react";
import * as dayjs from "dayjs";
import { Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { Clock, Point } from "@components/clock";
import { DayOption } from "@components/day-option";
import { RootTabScreenProps } from "@navigation";
import { mockedPoints } from "./dashboard.mock";
import {
  ClockContainer,
  Container,
  Content,
  DatePicker,
  DatePickerContainer,
  Header,
  UserText,
  WelcomeMessage,
} from "./dashboard.styles";

const screenWidth = Dimensions.get("screen").width;

const dayInMiliseconds = 3600 * 1000 * 24;

export const DashboardScreen = ({ navigation }: RootTabScreenProps<"Dasboard">) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const points: Point[] = useMemo(
    () => mockedPoints.map((point) => ({ ...point, onPress: () => navigation.navigate("Modal") })),
    [mockedPoints],
  );

  const shiftDegree = useSharedValue(0);
  const lastShiftDegree = useSharedValue(0);

  const dragGesture = Gesture.Pan()
    .averageTouches(true)
    .onStart(() => {
      lastShiftDegree.value = shiftDegree.value;
    })
    .onUpdate((e) => {
      const value = (lastShiftDegree.value + e.translationY) % 360;
      shiftDegree.value = value;
    });

  const renderDates = new Array(30).fill("").map((_, i) => {
    const date = new Date(Date.now() + dayInMiliseconds * i);
    const isActive =
      dayjs.default(date).format("DD/MM/YYYY") === dayjs.default(selectedDate).format("DD/MM/YYYY");

    return (
      <DayOption key={i} isActive={isActive} date={date} onPress={() => setSelectedDate(date)} />
    );
  });

  return (
    <Container>
      <Content>
        <Header>
          <WelcomeMessage>Good Morning</WelcomeMessage>
          <UserText>Mateusz</UserText>
        </Header>

        <DatePickerContainer>
          <DatePicker>{renderDates}</DatePicker>
        </DatePickerContainer>
      </Content>

      <ClockContainer>
        <GestureDetector gesture={dragGesture}>
          <Clock
            shiftDegree={shiftDegree}
            points={points}
            radius={150}
            style={{ marginLeft: -screenWidth }}
          />
        </GestureDetector>
      </ClockContainer>
    </Container>
  );
};
