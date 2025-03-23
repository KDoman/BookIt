import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    service: serviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
