import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import DrinkDetailsView from "@ui/components/DrinkDetails";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@core/services/Store";
import {
  getDrinkByIdAsync,
  getRandomDrinkAsync,
} from "@core/services/RandomDrink/getRandomDrinkSlice";

const DrinkDetailScreen = () => {
  const {
    params: { id },
  } = useRoute();

  const { drink, isLoading, errorMessage } = useSelector(
    (state: RootState) => state.rootReducer.getRandomDrink
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getDrinkByIdAsync(id));
  }, [id]);

  return (
    <View className="w-screen h-screen">
      {isLoading ? (
        <ActivityIndicator className="self-center" />
      ) : (
        <DrinkDetailsView drink={drink} />
      )}
    </View>
  );
};

export default DrinkDetailScreen;
