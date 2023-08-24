import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./features/personSlice";

export const store = configureStore({
  reducer: {
    personReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
