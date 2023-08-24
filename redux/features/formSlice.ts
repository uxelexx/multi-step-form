import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormSteps = "Your info" | "Select plan" | "Add-ons" | "Summary";

type FormInfo = {
  index: number;
  done: boolean;
  yearly: boolean;
  formSteps: FormSteps[];
};

const initialState: FormInfo = {
  index: 0,
  done: false,
  yearly: false,
  formSteps: ["Your info", "Select plan", "Add-ons", "Summary"],
};

const lastPage = initialState.index >= initialState.formSteps.length - 1;

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextPage: (state) => {
      if (lastPage) {
        return;
      }

      state.index++;
    },
    prevPage: (state) => {
      if (state.index === 0) {
        return;
      }

      state.index--;
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
