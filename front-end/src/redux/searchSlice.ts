import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ServiceState {
  service: string | null; // Przechowujemy aktualnie wybraną usługę
}

const initialState: ServiceState = {
  service: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setService: (state, action: PayloadAction<string | null>) => {
      state.service = action.payload;
    },
  },
});

export const { setService } = serviceSlice.actions;

export default serviceSlice.reducer;
