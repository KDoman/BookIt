import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalCardSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
