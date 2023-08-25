import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const addOnsSlice = {
//   service: { included: false, price: ADDS.service.price },
//   storage: { included: false, price: ADDS.storage.price },
//   profile: { included: false, price: ADDS.profile.price },
// };

type Addons = {
  service: { included: boolean; price: number; description: string };
  storage: { included: boolean; price: number; description: string };
  profile: { included: boolean; price: number; description: string };
};

type AddonsType = keyof Addons;

const initialState: Addons = {
  service: {
    included: false,
    price: 1,
    description: "Access to multiplayer games",
  },
  storage: {
    included: false,
    price: 2,
    description: "Extra 1TB of cloud save",
  },
  profile: {
    included: false,
    price: 2,
    description: "Custom theme on your profile",
  },
};

const addonsSlice = createSlice({
  name: "addons",
  initialState,
  reducers: {
    setAddons: (state, action: PayloadAction<AddonsType>) => {
      state[action.payload].included = !state[action.payload].included;
    },
  },
});

export const { setAddons } = addonsSlice.actions;
export default addonsSlice.reducer;
