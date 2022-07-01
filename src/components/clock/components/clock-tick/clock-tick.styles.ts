import Animated from "react-native-reanimated";
import styled from "styled-components/native";

type CircleProps = {
  isHour: boolean;
};

export const Container = styled(Animated.View)`
  position: absolute;
`;

export const Circle = styled(Animated.View)<CircleProps>`
  width: ${({ isHour }) => (isHour ? 9 : 3)}px;
  margin-left: ${({ isHour }) => (isHour ? -6 : 0)}px;
  height: 2px;
  border-radius: 4px;
  background-color: black;
`;
