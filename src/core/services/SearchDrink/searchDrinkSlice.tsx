import { Drink } from "@core/models/Drink";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FilterBy, searchDrinkByFilter, searchDrinks } from "./DrinkService";

interface SearchDrinkState {
  searchQuery: string;
  drinks: Drink[];
  isLoading: Boolean;
  errorMessage: string;
}

const initialState: SearchDrinkState = {
  searchQuery: "",
  drinks: [],
  isLoading: false,
  errorMessage: "",
};

const searchDrinkSlice = createSlice({
  name: "searchDrink",
  initialState: initialState,
  reducers: {
    searchQueryChanged: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterDrinkAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(filterDrinkAsync.fulfilled, (state, action) => {
        const { error, data } = action.payload;
        state.drinks = data;
        state.isLoading = false;
        state.errorMessage = error as unknown as string;
      })
      .addCase(searchDrinkAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(searchDrinkAsync.fulfilled, (state, action) => {
        const { error, data } = action.payload;
        state.drinks = data;
        state.isLoading = false;
        state.errorMessage = error as unknown as string;
      });
  },
});

export const searchDrinkAsync = createAsyncThunk(
  "searchDrink/searchDrinkAsync",
  async (query: string) => {
    return await searchDrinks(query);
  }
);

export const filterDrinkAsync = createAsyncThunk(
  "searchDrink/filterDrinkAsync",
  async ({ filterBy, query }: { filterBy: FilterBy; query: string }) => {
    return await searchDrinkByFilter(filterBy, query);
  }
);

export const { searchQueryChanged } = searchDrinkSlice.actions;

export default searchDrinkSlice.reducer;
