import type { Addons, AddonType } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: Addons = {
  service: {
    label: "Online service",
    included: false,
    price: 1,
    description: "Access to multiplayer games",
  },
  storage: {
    label: "Extra storage",
    included: false,
    price: 2,
    description: "Extra 1TB of cloud save",
  },
  profile: {
    label: "Customizable profile",
    included: false,
    price: 2,
    description: "Custom theme on your profile",
  },
};

const addonsSlice = createSlice({
  name: "addons",
  initialState,
  reducers: {
    setAddons: (state, action: PayloadAction<AddonType>) => {
      state[action.payload].included = !state[action.payload].included;
    },
  },
});

export const { setAddons } = addonsSlice.actions;
export default addonsSlice.reducer;
