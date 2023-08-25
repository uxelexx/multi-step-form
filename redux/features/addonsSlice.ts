import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const addOnsSlice = {
//   service: { included: false, price: ADDS.service.price },
//   storage: { included: false, price: ADDS.storage.price },
//   profile: { included: false, price: ADDS.profile.price },
// };

type Addons = {
  service: {
    label: string;
    included: boolean;
    price: number;
    description: string;
  };
  storage: {
    label: string;
    included: boolean;
    price: number;
    description: string;
  };
  profile: {
    label: string;
    included: boolean;
    price: number;
    description: string;
  };
};

export type AddonsKeys = keyof Addons;

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
    setAddons: (state, action: PayloadAction<AddonsKeys>) => {
      state[action.payload].included = !state[action.payload].included;
    },
  },
});

export const { setAddons } = addonsSlice.actions;
export default addonsSlice.reducer;
