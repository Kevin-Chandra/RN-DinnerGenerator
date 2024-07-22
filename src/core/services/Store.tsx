import { configureStore } from "@reduxjs/toolkit";
import searchDrinkReducer from "@core/services/SearchDrink/searchDrinkSlice";
import { rootReducer } from "./RootReducer";
import { api } from "./Api/RtkQuery";

export const store = configureStore({
  reducer: {
    rootReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
