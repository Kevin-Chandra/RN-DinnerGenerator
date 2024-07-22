import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomDrink, lookupDrink } from "../SearchDrink/DrinkService";
import { Drink } from "@core/models/Drink";

interface RandomDrinkState {
  searchQuery: string;
  drink: Drink;
  isLoading: Boolean;
  errorMessage: string;
}

const initialState: RandomDrinkState = {
  searchQuery: "",
  drink: {
    idDrink: "",
    strDrink: "",
    strDrinkThumb: "",
    strCategory: "",
    strGlass: "",
    strInstructions: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strMeasure1: "",
    strMeasure2: "",
    strMeasure3: "",
    strMeasure4: "",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
    strMeasure8: "",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
  },
  isLoading: false,
  errorMessage: "",
};

const getRandomDrinkSlice = createSlice({
  name: "getRandomDrink",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDrinkByIdAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getDrinkByIdAsync.fulfilled, (state, action) => {
        const { error, data } = action.payload;
        state.drink = data;
        state.isLoading = false;
        state.errorMessage = error as unknown as string;
      })
      .addCase(getRandomDrinkAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getRandomDrinkAsync.fulfilled, (state, action) => {
        const { error, data } = action.payload;
        state.drink = data;
        state.isLoading = false;
        state.errorMessage = error as unknown as string;
      });
  },
});

export const getRandomDrinkAsync = createAsyncThunk(
  "getRandomDrink/getRandomDrinkAsync",
  async () => {
    return await getRandomDrink();
  }
);

export const getDrinkByIdAsync = createAsyncThunk(
  "getRandomDrink/getDrinkByIdAsync",
  async (id: string) => {
    return await lookupDrink(id);
  }
);

export const {} = getRandomDrinkSlice.actions;

export default getRandomDrinkSlice.reducer;
