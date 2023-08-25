import type { PayloadActionType, PersonalInfo } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: PersonalInfo = {
  userName: "",
  userEmail: "",
  userPhone: "",
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    updatePerson: (state, action: PayloadAction<PayloadActionType>) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { updatePerson } = personSlice.actions;
export default personSlice.reducer;
