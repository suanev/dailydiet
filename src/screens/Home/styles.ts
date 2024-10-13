import { FlatList } from "react-native";
import styled from "styled-components/native";

import Button from "../../components/Button";

interface ContainerProps {
  top: number;
  bottom: number;
}

interface StayedOnDietProps {
  stayedOnDiet: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  top: ${({ top }) => top}px;
  bottom: ${({ bottom }) => bottom}px;

  align-items: center;
`;

export const Row = styled.View`
  width: 100%;
  padding: 0 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const InitialsIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;

  align-items: center;
  justify-content: center;

  border-color: ${({ theme }) => theme.colors.gray200};
  background-color: ${({ theme }) => theme.colors.greenDark};
`;

export const InitialsText = styled.Text`
  font-weight: bold;

  color: ${({ theme }) => theme.colors.white};
`;

export const PercentContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 327px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.greenLight};
`;

export const ArrowButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 32px;
  height: 32px;
  margin: 12px 12px 2px 12px;
  align-self: flex-end;
`;

export const PercentText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray100};
`;

export const PercentSubtitle = styled.Text`
  font-size: 14px;
  text-align: center;

  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray200};
`;

export const MealsContainer = styled.View`
  margin-top: 27px;
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  padding-bottom: 8px;

  color: ${({ theme }) => theme.colors.gray100};
`;

export const NewMealButton = styled(Button).attrs({
  containerStyle: {
    width: 327,
  },
})``;

export const DaysList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingBottom: 120,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Date = styled.Text`
  font-size: 18px;
  font-weight: bold;

  text-align: start;
  align-content: flex-start;
  align-self: flex-start;

  margin-top: 32px;
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.gray100};
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;

  margin: 0 12px;
  align-self: center;

  background-color: ${({ theme }) => theme.colors.gray400};
`;

export const MealItem = styled.View`
  width: 327px;
  padding: 8px 8px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.gray400};
`;

export const MealHour = styled.Text`
  font-size: 12px;
  font-weight: bold;
  width: 38px;

  align-self: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray100};
`;

export const MealName = styled.Text`
  font-size: 16px;

  color: ${({ theme }) => theme.colors.gray200};
`;

export const StayedOnDiet = styled.View<StayedOnDietProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;

  background-color: ${({ theme, stayedOnDiet }) =>
    stayedOnDiet ? theme.colors.greenMid : theme.colors.redMid};
`;
