import { combineReducers } from "@reduxjs/toolkit";
import searchDrinkReducer from "@core/services/SearchDrink/searchDrinkSlice";
import getRandomDrinkAsync from "@core/services/RandomDrink/getRandomDrinkSlice";

export const rootReducer = combineReducers({
  searchDrink: searchDrinkReducer,
  getRandomDrink: getRandomDrinkAsync,
});
