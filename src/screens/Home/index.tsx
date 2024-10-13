import { ArrowUpRight, Plus } from "phosphor-react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

import logo from "../../assets/img/Logo.png";
import { data } from "../../components/service/data";
import Spacer from "../../components/Spacer";
import {
  ArrowButton,
  Container,
  Date,
  DayList,
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
import { FlatList, View } from "react-native";

interface Meal {
  date: string;
  meals: {
    name: string;
    description: string;
    time: string;
    stayedOnDiet: boolean;
  }[];
}

const Home = () => {
  const theme = useTheme();
  const { top, bottom } = useSafeAreaInsets();

  const navigateToStatistcs = () => {
    console.log("oi");
  };

  return (
    <Container top={top} bottom={bottom}>
      <Row>
        <Logo source={logo} />
        <InitialsIcon>
          <InitialsText>SV</InitialsText>
        </InitialsIcon>
      </Row>
      <Spacer size={32} />
      <PercentContainer onPress={navigateToStatistcs}>
        <ArrowButton onPress={navigateToStatistcs}>
          <ArrowUpRight size={32} color={theme.colors.greenDark} />
        </ArrowButton>

        <PercentText>90,86%</PercentText>
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
