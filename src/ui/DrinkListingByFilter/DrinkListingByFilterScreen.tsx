import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DrinkListingCard from "@ui/components/DrinkListingCard";
import { AppDispatch, RootState } from "@core/services/Store";
import { filterDrinkAsync } from "@core/services/SearchDrink/searchDrinkSlice";
import { FilterBy } from "@core/services/SearchDrink/DrinkService";
import { useRoute } from "@react-navigation/native";

const DrinkListingByFilterScreen = () => {
  const { searchQuery, drinks, isLoading, errorMessage } = useSelector(
    (state: RootState) => state.rootReducer.searchDrink
  );
  const dispatch = useDispatch<AppDispatch>();

  const {
    params: { filterBy, query },
  } = useRoute();

  useEffect(() => {
    dispatch(filterDrinkAsync({ filterBy, query }));
  }, []);

  return (
    <View className="flex">
      <Text className="font-semibold text-xl">{`Search by ${filterBy}: ${query}`}</Text>

      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : errorMessage ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={drinks}
          renderItem={({ item }) => <DrinkListingCard drink={item} />}
          keyExtractor={(item) => item.idDrink.toString()}
          horizontal={false}
        />
      )}
    </View>
  );
};

export default DrinkListingByFilterScreen;
