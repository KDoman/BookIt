import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  selectedIdCard: string | null;
}

const initialState: ModalState = {
  isOpen: false,
  selectedIdCard: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.selectedIdCard = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedIdCard = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
