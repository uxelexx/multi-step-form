import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./features/personSlice";
import formReducer from "./features/formSlice";
import planReducer from "./features/planSlice";
import addonsReducer from "./features/addonsSlice";

export const store = configureStore({
  reducer: {
    personReducer,
    formReducer,
    planReducer,
    addonsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
