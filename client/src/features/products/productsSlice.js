import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsSettings: {
    currentCategory: undefined,
    activeCategoryButton: null,
    isCategorySelectionBlocked: false,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentCategory: {
      reducer(state, action) {
        state.productsSettings.currentCategory = action.payload;
      },
    },
    setActiveCategoryButton: {
      reducer(state, action) {
        state.productsSettings.activeCategoryButton = action.payload;
      },
    },
    setIsCategorySelectionBlocked: {
      reducer(state, action) {
        state.productsSettings.isCategorySelectionBlocked = action.payload;
      },
    },
  },
});

export const { setCurrentCategory, setActiveCategoryButton, setIsCategorySelectionBlocked } =
  productsSlice.actions;
export default productsSlice.reducer;
