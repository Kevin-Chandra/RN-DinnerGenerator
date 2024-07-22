import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Drink } from "@core/models/Drink";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { FilterBy } from "@core/services/SearchDrink/DrinkService";

const StyledView = styled(View);

const DrinkDetailsView = ({ drink }: { drink: Drink }) => {
  const navigation = useNavigation();
  return (
    <StyledView className="p-8 flex justify-center gap-4 w-full">
      {drink.strDrinkThumb !== "" && (
        <Image
          className="p-8"
          style={styles.imageStyle}
          source={{
            uri: drink.strDrinkThumb,
          }}
        />
      )}
      <Text className="text-2xl font-bold">{drink.strDrink}</Text>

      <View className="">
        <Text className="text-2xl font-serif">Category</Text>
        <TouchableOpacity
          className="text-xl font-bold"
          onPress={() =>
            handleCategoryPress({
              navigation: navigation,
              filterBy: FilterBy.Category,
              query: drink.strCategory,
            })
          }
        >
          <Text>{drink.strCategory}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text className="text-2xl font-serif">Glass</Text>
        <TouchableOpacity
          className="text-xl font-bold"
          onPress={() =>
            handleCategoryPress({
              navigation: navigation,
              filterBy: FilterBy.Glass,
              query: drink.strGlass,
            })
          }
        >
          <Text className="text-left font-serif">{drink.strGlass}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text className="text-2xl font-serif">Instructions</Text>
        <Text className="text-left font-serif">{drink.strInstructions}</Text>
      </View>

      <View>
        <Text className="text-2xl font-serif">Ingredients</Text>

        <IngredientsText
          text1={drink.strMeasure1}
          text2={drink.strIngredient1}
        />

        <IngredientsText
          text1={drink.strMeasure2}
          text2={drink.strIngredient2}
        />

        <IngredientsText
          text1={drink.strMeasure3}
          text2={drink.strIngredient3}
        />

        <IngredientsText
          text1={drink.strMeasure4}
          text2={drink.strIngredient4}
        />

        <IngredientsText
          text1={drink.strMeasure5}
          text2={drink.strIngredient5}
        />

        <IngredientsText
          text1={drink.strMeasure6}
          text2={drink.strIngredient6}
        />

        <IngredientsText
          text1={drink.strMeasure7}
          text2={drink.strIngredient7}
        />

        <IngredientsText
          text1={drink.strMeasure8}
          text2={drink.strIngredient8}
        />

        <IngredientsText
          text1={drink.strMeasure9}
          text2={drink.strIngredient9}
        />

        <IngredientsText
          text1={drink.strMeasure10}
          text2={drink.strIngredient10}
        />

        <IngredientsText
          text1={drink.strMeasure11}
          text2={drink.strIngredient11}
        />

        <IngredientsText
          text1={drink.strMeasure12}
          text2={drink.strIngredient12}
        />

        <IngredientsText
          text1={drink.strMeasure13}
          text2={drink.strIngredient13}
        />

        <IngredientsText
          text1={drink.strMeasure14}
          text2={drink.strIngredient14}
        />

        <IngredientsText
          text1={drink.strMeasure15}
          text2={drink.strIngredient15}
        />
      </View>
    </StyledView>
  );
};

const IngredientsText = ({
  text1,
  text2,
}: {
  text1: string;
  text2: string;
}) => {
  return (
    <View className="flex-row">
      <Text className="flex-none w-36">{text1}</Text>
      <Text className="flex-initial">{text2}</Text>
    </View>
  );
};

const handleCategoryPress = ({
  navigation,
  filterBy,
  query,
}: {
  navigation: any;
  filterBy: FilterBy;
  query: string;
}) => {
  navigation.navigate("DRINK_LISTING_FILTER", {
    filterBy: filterBy,
    query: query,
  });
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
  },
});

export default DrinkDetailsView;
