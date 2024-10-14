import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

import {
  BackButton,
  Container,
  Header,
  PercentSubtitle,
  PercentText,
  Row,
  SectionTitle,
  StatBox,
  StatLabel,
  StatNumber,
  StatsContainer,
} from "./styles";
import useDietStatistics from "../../hooks/useDietStatistcs";
import { data } from "../../components/service/data";
import Spacer from "../../components/Spacer";

const Statistics = () => {
  const theme = useTheme();
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  const { totalMeals, mealsOnDiet, percentage, bestSequenceOfMealsOnDiet } =
    useDietStatistics(data);
  const percentOnDiet = percentage.toFixed(2).replace(".", ",");

  const stayedOnDiet = mealsOnDiet >= totalMeals / 2;

  return (
    <Container bottom={bottom}>
      <Header
        backgroundColor={
          stayedOnDiet ? theme.colors.greenLight : theme.colors.redLight
        }
      >
        <BackButton onPress={() => navigation.goBack()}>
          <ArrowLeft
            color={stayedOnDiet ? theme.colors.greenDark : theme.colors.redDark}
            size={24}
          />
        </BackButton>

        <PercentText>{percentOnDiet}%</PercentText>
        <PercentSubtitle>das refeições dentro da dieta</PercentSubtitle>
      </Header>

      <Spacer size={32} />

      <SectionTitle>Estatísticas gerais</SectionTitle>
      <StatsContainer>
        <StatBox>
          <StatNumber>{bestSequenceOfMealsOnDiet}</StatNumber>
          <StatLabel>melhor sequência de pratos dentro da dieta</StatLabel>
        </StatBox>
        <StatBox>
          <StatNumber>{totalMeals}</StatNumber>
          <StatLabel>refeições registradas</StatLabel>
        </StatBox>
        <Row>
          <StatBox backgroundColor={theme.colors.greenLight} width={158}>
            <StatNumber>{mealsOnDiet}</StatNumber>
            <StatLabel>refeições dentro da dieta</StatLabel>
          </StatBox>
          <StatBox backgroundColor={theme.colors.redLight} width={158}>
            <StatNumber>{totalMeals - mealsOnDiet}</StatNumber>
            <StatLabel>refeições fora da dieta</StatLabel>
          </StatBox>
        </Row>
      </StatsContainer>
    </Container>
  );
};

export default Statistics;
