import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DrinkListingCard from "@ui/components/DrinkListingCard";
import { AppDispatch, RootState } from "@core/services/Store";
import {
  searchDrinkAsync,
  searchQueryChanged,
} from "@core/services/SearchDrink/searchDrinkSlice";

const DrinkListingScreen = () => {
  const { searchQuery, drinks, isLoading, errorMessage } = useSelector(
    (state: RootState) => state.rootReducer.searchDrink
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View className="flex">
      <TextInput
        className=""
        onChangeText={(text) => {
          dispatch(searchQueryChanged(text));
        }}
        value={searchQuery}
        placeholder="Search a drink"
        keyboardType="default"
      />

      <Button
        onPress={() => {
          dispatch(searchDrinkAsync(searchQuery));
        }}
        title="Search"
      />

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

export default DrinkListingScreen;
