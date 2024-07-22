import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "components/ParallaxScrollView";
import { useNavigation } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@core/services/Store";
import { getRandomDrinkAsync } from "@core/services/RandomDrink/getRandomDrinkSlice";
import { useEffect } from "react";
import DrinkDetailsView from "@ui/components/DrinkDetails";
import { test1 } from "@core/services/Api/RtkQuery";

export default function LoginScreen() {
  const { navigate } = useNavigation();
  const { drink, isLoading, errorMessage } = useSelector(
    (state: RootState) => state.rootReducer.getRandomDrink
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getRandomDrinkAsync());
  }, []);

  return (
    <View>
      {isLoading ? <ActivityIndicator /> : <DrinkDetailsView drink={drink} />}
    </View>
  );
}
