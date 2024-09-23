import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist'
import { recipesFiltersSlice } from "./slices/cuisineFilters.slice";

export const store = configureStore({
  reducer: {
    recipesFilters: recipesFiltersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
