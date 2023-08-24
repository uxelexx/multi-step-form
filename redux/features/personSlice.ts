import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PersonalInfo = {
  userName: string;
  userEmail: string;
  userPhone: string;
};

export type PersonalInfoKeys = keyof PersonalInfo;

type Payload = {
  name: PersonalInfoKeys;
  value: string;
};

const initialState: PersonalInfo = {
  userName: "",
  userEmail: "",
  userPhone: "",
};

export const person = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    updatePerson: (state, action: PayloadAction<Payload>) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { updatePerson } = person.actions;
export default person.reducer;
