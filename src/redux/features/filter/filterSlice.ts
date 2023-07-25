import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFilter {
  genre: string;
  year: string;
}

const initialState: IFilter = {
  genre: "",
  year: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    filterByYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterByGenre, filterByYear } = filterSlice.actions;
