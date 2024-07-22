import BASE_URL from "@core/constants/Constants";
import { Drink } from "@core/models/Drink";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    drinkList: build.query<Drink[], { searchQuery: string }>({
      query: ({ searchQuery }) => `search.php?s=${searchQuery}`,
    }),
    drinkDetails: build.query<Drink, { id: string }>({
      query: ({ id }) => `lookup.php?i=${id}`,
    }),
  }),
});

export const { useDrinkListQuery, useDrinkDetailsQuery } = api;

export const test1 = () => {
  const { data, isLoading } = useDrinkDetailsQuery({ id: "11007" });
  console.log(data);
};
