import type { Plans, PlanPrices } from "@/public/types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const plansPrices: PlanPrices = {
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
    setPlan: (state, action: PayloadAction<keyof typeof plansPrices>) => {
      state.type = action.payload;
    },
  },
});

export const { setPlan } = planSlice.actions;
export default planSlice.reducer;
