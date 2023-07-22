import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../../../types/globalType";

interface ICart {
  books: IBooks[];
}

const initialState: ICart = {
  books: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IBooks>) => {
      const existingBook = state.books.find(
        (b) => b._id === action.payload._id
      );
      if (existingBook) {
        existingBook.quantity! += 1;
      } else {
        state.books.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOne: (state, action: PayloadAction<IBooks>) => {
      const existingBook = state.books.find(
        (b) => b._id === action.payload._id
      );

      if (existingBook && existingBook.quantity! > 1) {
        existingBook.quantity! -= 1;
      } else {
        state.books = state.books.filter((p) => p._id !== action.payload._id);
      }
    },
    removeFromCart: (state, action: PayloadAction<IBooks>) => {
      state.books = state.books.filter((p) => p._id !== action.payload._id);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeOne, removeFromCart } = cartSlice.actions;
