import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PlansKey = keyof Plans;

type Plans = {
  Arcade: number;
  Advanced: number;
  Pro: number;
  type: PlansKey;
};

export const plansPrices: Omit<Plans, "type"> = {
  Arcade: 9,
  Advanced: 12,
  Pro: 15,
};

const initialState: Plans = {
  type: "Arcade",
  ...plansPrices,
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlan: (state, action: PayloadAction<PlansKey>) => {
      state.type = action.payload;
    },
  },
});

export const { setPlan } = planSlice.actions;
export default planSlice.reducer;
