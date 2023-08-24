import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PersonalInfo = {
  userName: string;
  userEmail: string;
  userPhone: string;
};

const initialState: PersonalInfo = {
  userName: "",
  userEmail: "",
  userPhone: "",
};

export const person = createSlice({
  name: "personal",
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userPhone = action.payload.userPhone;
    },
  },
});

export const { setPersonalInfo } = person.actions;
export default person.reducer;
