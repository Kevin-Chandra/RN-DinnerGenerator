import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FlashCard } from "@core/models/FlashCard";

const FlashCardComponent = ({ flashCard }: { flashCard: FlashCard }) => {
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  return (
    <View>
      <TouchableOpacity
        className="w-48 border-zinc-900 border-4 h-48 m-4 p-8"
        onPress={() => setIsAnswerShown(!isAnswerShown)}
      >
        <Text>{isAnswerShown ? "Answer:" : "Question"}</Text>
        <Text>{isAnswerShown ? flashCard.answer : flashCard.question}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlashCardComponent;
