import styled from "styled-components/native";
import { CommonText } from "@components/common-text";

export const Container = styled.View``;

export const Content = styled.View``;

export const Header = styled.SafeAreaView`
  margin: 100px 20px 0;
  background-color: "red";
`;

export const WelcomeMessage = styled(CommonText)`
  font-size: 30px;
`;

export const DatePickerContainer = styled.View`
  margin-top: 40px;
  padding: 10px 0;
`;

export const DatePicker = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 15px 20px;
`;

export const UserText = styled(CommonText)`
  font-size: 30px;
  font-weight: bold;
`;

export const ClockContainer = styled.View`
  margin-top: 40px;
  z-index: -1;
`;
