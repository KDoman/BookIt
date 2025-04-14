import { configureStore } from "@reduxjs/toolkit";
import inputValueReducer from "../redux/slices/inputValueSlice";
import searchFilterReducer from "../redux/slices/searchFilterSlice";

export const store = configureStore({
  reducer: {
    inputValue: inputValueReducer,
    searchFilter: searchFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
