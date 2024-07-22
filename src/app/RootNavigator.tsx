import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "@ui/login/LoginScreen";
import DrinkListingScreen from "@ui/DrinkListing/DrinkListingScreen";
import DrinkDetailScreen from "@ui/DrinkDetails/DrinkDetailsScreen";
import RandomDrinkScreen from "@ui/RandomDrink/RandomDrinkScreen";
import DrinkListingByFilterScreen from "@ui/DrinkListingByFilter/DrinkListingByFilterScreen";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeNavigator"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DRINK_LISTING"
          component={DrinkListingScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="DRINK_DETAILS"
          component={DrinkDetailScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="RANDOM_DRINK"
          component={RandomDrinkScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DRINK_LISTING_FILTER"
          component={DrinkListingByFilterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
