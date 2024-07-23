import { combineReducers } from "@reduxjs/toolkit";
import searchDrinkReducer from "@core/services/SearchDrink/searchDrinkSlice";
import getRandomDrinkReducer from "@core/services/RandomDrink/getRandomDrinkSlice";
import flashCardReducer from "@core/services/FlashCard/flashCardSlice";

export const rootReducer = combineReducers({
  searchDrink: searchDrinkReducer,
  getRandomDrink: getRandomDrinkReducer,
  flashCard: flashCardReducer,
});
