import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import FeedBack from "../screens/FeedBack";
import MealRegistration from "../screens/MealRegistration";
import Statistics from "../screens/Statistics";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Statistics"
          component={Statistics}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MealRegistration"
          component={MealRegistration}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="FeedBack"
          component={FeedBack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
