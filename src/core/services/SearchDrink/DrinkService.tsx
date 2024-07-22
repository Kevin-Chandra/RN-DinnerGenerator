import { Drink } from "@core/models/Drink";
import { useFetch1 } from "../Api/ApiService";

export const searchDrinks = async (query: string) => {
  const { error, data } = await useFetch1(`search.php`, { s: query });
  return {
    error: error,
    data: data.drinks as Drink[],
  };
};

export const getRandomDrink = async () => {
  const { error, data } = await useFetch1(`random.php`, {});
  return {
    error: error,
    data: data.drinks[0] as Drink,
  };
};

export const lookupDrink = async (id: string) => {
  const { error, data } = await useFetch1(`lookup.php`, { i: id });
  return {
    error: error,
    data: data.drinks[0] as Drink,
  };
};

export const searchDrinkByFilter = async (
  filterBy: FilterBy,
  query: string
) => {
  const { error, data } = await useFetch1(
    `filter.php`,
    getParams(filterBy, query)
  );
  return {
    error: error,
    data: data.drinks as Drink[],
  };
};

function getParams(filterBy: FilterBy, query: string) {
  switch (filterBy) {
    case FilterBy.Glass:
      return { g: query };
    case FilterBy.Category:
      return { c: query };
    case FilterBy.Ingredients:
      return { i: query };
    case FilterBy.Alcoholic:
      return { a: query };
  }
}

export enum FilterBy {
  Glass,
  Category,
  Ingredients,
  Alcoholic,
}
