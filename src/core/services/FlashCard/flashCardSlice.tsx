import { FlashCard } from "@core/models/FlashCard";
import { shuffle } from "@core/utils/Extensions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FlashCardState {
  cards: FlashCard[];
}

const FLASH_CARD_INITIAL_STATE: FlashCardState = {
  cards: [
    { id: "0", question: "What is the capital of France", answer: "Paris" },
    { id: "1", question: "What is the square root of 144", answer: "12" },
    { id: "2", question: "What is the smallest prime number", answer: "2" },
    {
      id: "3",
      question: "What is the largest planet in solar system",
      answer: "Jupiter",
    },
  ],
};

const flashCardSlice = createSlice({
  name: "flashCard",
  initialState: FLASH_CARD_INITIAL_STATE,
  reducers: {
    flashCardShuffled: (state: FlashCardState) => {
      state.cards = shuffle(state.cards);
    },
    flashCardAdded: (
      state: FlashCardState,
      action: PayloadAction<FlashCard>
    ) => {
      state.cards.push(action.payload);
    },
  },
});

export const { flashCardShuffled, flashCardAdded } = flashCardSlice.actions;
export default flashCardSlice.reducer;
