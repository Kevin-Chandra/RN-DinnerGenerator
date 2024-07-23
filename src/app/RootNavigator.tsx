import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "@ui/Home/HomeScreen";
import DrinkListingScreen from "@ui/DrinkListing/DrinkListingScreen";
import DrinkDetailScreen from "@ui/DrinkDetails/DrinkDetailsScreen";
import RandomDrinkScreen from "@ui/RandomDrink/RandomDrinkScreen";
import DrinkListingByFilterScreen from "@ui/DrinkListingByFilter/DrinkListingByFilterScreen";
import FlashCardScreen from "@ui/FlashCard/FlashCardScreen";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="HomeNavigator"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="DRINK_LISTING"
          component={DrinkListingScreen}
          options={{ title: "Search Drink" }}
        />
        <Stack.Screen
          name="DRINK_DETAILS"
          component={DrinkDetailScreen}
          options={{ title: "Drink Details" }}
        />
        <Stack.Screen
          name="RANDOM_DRINK"
          component={RandomDrinkScreen}
          options={{ title: "Random Drink" }}
        />
        <Stack.Screen
          name="DRINK_LISTING_FILTER"
          component={DrinkListingByFilterScreen}
          options={{ title: "Drink List" }}
        />
        <Stack.Screen
          name="FLASH_CARD"
          component={FlashCardScreen}
          options={{ title: "Flash Card" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
