import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputValueState {
  value: string | undefined;
}

const initialState: InputValueState = {
  value: undefined,
};

export const inputValueSlice = createSlice({
  name: "inputServiceValue",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = inputValueSlice.actions;
export default inputValueSlice.reducer;
