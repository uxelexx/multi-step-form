import { FormInfo } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FormInfo = {
  index: 0, // Change later to 0
  done: false,
  yearly: false,
  formSteps: ["Your info", "Select plan", "Add-ons", "Summary"],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextPage: (state) => {
      const isLastPage = state.index >= state.formSteps.length - 1;

      if (!isLastPage) state.index++;
    },

    prevPage: (state) => {
      if (!state.index) state.index--;
    },

    toggleYearly: (state) => {
      state.yearly = !state.yearly;
    },

    finishForm: (state) => {
      state.done = true;
    },
  },
});

export const { nextPage, prevPage, toggleYearly, finishForm } =
  formSlice.actions;
export default formSlice.reducer;
