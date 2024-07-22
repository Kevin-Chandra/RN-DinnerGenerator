import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Drink } from "@core/models/Drink";
import { useNavigation } from "@react-navigation/native";

const DrinkListingCard = ({ drink }: { drink: Drink }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="w-max -inset-16"
      onPress={() => handleNavigation(navigation, drink.idDrink)}
    >
      <Text>{drink.strDrink}</Text>
    </TouchableOpacity>
  );
};

const handleNavigation = (navigation: any, id: string) => {
  navigation.navigate("DRINK_DETAILS", { id });
};

export default DrinkListingCard;
