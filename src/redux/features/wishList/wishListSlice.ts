import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../../../types/globalType";

interface IWishlist {
  books: IBooks[];
}

const initialState: IWishlist = {
  books: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBooks>) => {
      const existingBook = state.books.find(
        (b) => b._id === action.payload._id
      );
      if (!existingBook) {
        state.books.push({
          ...action.payload,
          readingStatus: false,
          readingComplete: false,
        });
      }
    },
    removeFromWishlist: (state, action: PayloadAction<IBooks>) => {
      state.books = state.books.filter((p) => p._id !== action.payload._id);
    },
  },
});

export default wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
