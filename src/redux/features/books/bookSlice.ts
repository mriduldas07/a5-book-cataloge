import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../../../types/globalType";

interface IBook {
  book: IBooks | null;
}

const initialState: IBook = {
  book: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    editing: (state, action: PayloadAction<IBooks>) => {
      state.book = action.payload;
    },
    cancelEditing: (state) => {
      state.book = null;
    },
  },
});

export default bookSlice.reducer;
export const { editing, cancelEditing } = bookSlice.actions;
