import Animated from "react-native-reanimated";
import styled from "styled-components/native";

type CircleProps = {
  radius: number;
};

export const Circle = styled(Animated.View)<CircleProps>`
  height: ${({ radius }) => radius * 2}px;
  width: ${({ radius }) => radius * 2}px;
  border-radius: ${({ radius }) => radius}px;
  border-width: 1px;
  border-color: gray;
  justify-content: center;
`;
