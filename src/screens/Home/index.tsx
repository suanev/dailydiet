import { useNavigation } from "@react-navigation/native";
import { ArrowUpRight, Plus } from "phosphor-react-native";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

import { data } from "../../components/service/data";
import Spacer from "../../components/Spacer";
import useDietStatistics from "../../hooks/useDietStatistcs";
import {
  ArrowButton,
  Container,
  Date,
  DaysList,
  Divider,
  InitialsIcon,
  InitialsText,
  Logo,
  MealHour,
  MealItem,
  MealName,
  MealsContainer,
  NewMealButton,
  PercentContainer,
  PercentSubtitle,
  PercentText,
  Row,
  SectionTitle,
  StayedOnDiet,
} from "./styles";

const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();

  const { totalMeals, mealsOnDiet, percentage } = useDietStatistics(data);
  const formattedPercentage = percentage.toFixed(2).replace(".", ",");

  const navigateToStatistcs = () => {
    navigation.navigate("Statistics");
  };

  return (
    <Container top={top} bottom={bottom}>
      <Row>
        <Logo source={require("../../assets/img/Logo.png")} />
        <InitialsIcon>
          <InitialsText>SV</InitialsText>
        </InitialsIcon>
      </Row>
      <Spacer size={32} />
      <PercentContainer onPress={navigateToStatistcs}>
        <ArrowButton onPress={navigateToStatistcs}>
          <ArrowUpRight size={32} color={theme.colors.greenDark} />
        </ArrowButton>

        <PercentText>{formattedPercentage}%</PercentText>
        <Spacer size={2} />
        <PercentSubtitle>das refeições dentro da dieta</PercentSubtitle>
      </PercentContainer>

      <MealsContainer>
        <SectionTitle>Refeições</SectionTitle>
        <NewMealButton Icon={Plus} label="Nova refeição" onPress={() => {}} />
      </MealsContainer>

      <DaysList
        data={data}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <View>
            <Date>{item.date}</Date>

            {item.meals.map((meal, key) => (
              <MealItem key={key}>
                <View style={{ flexDirection: "row" }}>
                  <MealHour>{meal.time}</MealHour>
                  <Divider />
                  <MealName>{meal.name}</MealName>
                </View>

                <StayedOnDiet stayedOnDiet={meal.stayedOnDiet} />
              </MealItem>
            ))}
          </View>
        )}
      />
    </Container>
  );
};

export default Home;
