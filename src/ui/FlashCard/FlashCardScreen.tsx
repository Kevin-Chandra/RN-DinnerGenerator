import { View, Button, FlatList } from "react-native";
import React from "react";
import { useAppDispatch } from "@core/utils/reduxHook";
import FlashCardComponent from "./FlashCard";
import {
  flashCardAdded,
  flashCardShuffled,
} from "@core/services/FlashCard/flashCardSlice";
import { useSelector } from "react-redux";
import { FlashCard } from "@core/models/FlashCard";
import { RootState } from "@core/services/Store";

const FlashCardScreen = ({ navigation }: { navigation: Navigator }) => {
  const cards: FlashCard[] = useSelector(
    (state: RootState) => state.rootReducer.flashCard.cards
  );
  const dispatcher = useAppDispatch();
  return (
    <View>
      <FlatList
        data={cards}
        renderItem={({ item }) => <FlashCardComponent flashCard={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />

      <Button
        onPress={() => {
          dispatcher(flashCardShuffled());
        }}
        title="Shuffle"
      />
      <Button
        onPress={() => {
          dispatcher(
            flashCardAdded({
              id: cards.length.toString(),
              question: "AAAA",
              answer: "BBBB",
            })
          );
        }}
        title="Add post"
      />
    </View>
  );
};

export default FlashCardScreen;
