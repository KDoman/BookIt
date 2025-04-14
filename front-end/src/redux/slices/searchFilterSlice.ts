import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface SearchFilter {
  city: string | null;
  time: string | null;
  date: Date | null;
}

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState: { city: null, time: null, date: null } as SearchFilter,
  reducers: {
    setCityFilter(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setTimeFilter(state, action: PayloadAction<string>) {
      state.time = action.payload;
    },
    setDateFilter(state, action: PayloadAction<Date>) {
      state.date = action.payload;
    },
  },
});

export const { setCityFilter, setTimeFilter, setDateFilter } =
  searchFilterSlice.actions;
export default searchFilterSlice.reducer;
