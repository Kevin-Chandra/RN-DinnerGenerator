import { Text, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect } from "react";
import DrinkListingCard from "@ui/components/DrinkListingCard";
import { filterDrinkAsync } from "@core/services/SearchDrink/searchDrinkSlice";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "@core/utils/reduxHook";
import { useSelector } from "react-redux";
import { RootState } from "@core/services/Store";

const DrinkListingByFilterScreen = () => {
  const { searchQuery, drinks, isLoading, errorMessage } = useSelector(
    (state: RootState) => state.rootReducer.searchDrink
  );
  const dispatch = useAppDispatch();

  const {
    params: { filterBy, query },
  } = useRoute();

  useEffect(() => {
    dispatch(filterDrinkAsync({ filterBy, query }));
  }, []);

  return (
    <SafeAreaView className="flex m-4">
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
    </SafeAreaView>
  );
};

export default DrinkListingByFilterScreen;
