import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FetchRecipesArg } from "@/services/fetchRecipes";

const initialState: FetchRecipesArg = {
  query: "",
  offset: 0,
  number: 5,
  cuisine: "italian"
};

export const recipesFiltersSlice = createSlice({
  name: "recipesFiltersSlice",
  initialState: initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.offset = action.payload;
    },
    setCuisine(state, action: PayloadAction<string>) {
      state.cuisine = action.payload
    }
  },
});

export const {
  actions: { setSearchText, setPage, setCuisine },
} = recipesFiltersSlice;
