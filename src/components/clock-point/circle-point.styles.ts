import Animated from "react-native-reanimated";
import styled from "styled-components/native";

type CircleProps = {
  radius: number;
};

export const Container = styled(Animated.View)`
  position: absolute;
`;

export const Circle = styled.View<CircleProps>`
  height: ${({ radius }) => radius * 2}px;
  width: ${({ radius }) => radius * 2}px;
  border-radius: ${({ radius }) => radius}px;
  margin-left: -${({ radius }) => radius}px;
  margin-right: 10px;
`;
