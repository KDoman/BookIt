import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type SearchFilterType = string | undefined;

export interface SearchFilter {
  city: SearchFilterType;
  date: SearchFilterType;
}

const initialState: SearchFilter = {
  city: undefined,
  date: undefined,
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setCityFilter(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },

    setDateFilter(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
  },
});

export const { setCityFilter, setDateFilter } = searchFilterSlice.actions;
export default searchFilterSlice.reducer;
