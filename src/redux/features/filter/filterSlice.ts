import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFilter {
  genre: string;
  year: string;
  search: string;
}

const initialState: IFilter = {
  genre: "",
  year: "",
  search: "",
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
    fiterBySearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterByGenre, filterByYear, fiterBySearch } =
  filterSlice.actions;
