import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsSettings: {
    currentCategory: undefined, // 646f53c6c0a43b4c6da145e4
    activeCategoryButton: null,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Тут мені потрібно передати ID поточної категорії а яку натсинув користучач, для того щоб за цим ID дістати відповідні продукти
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
  },
});

export const { setCurrentCategory, setActiveCategoryButton } =
  productsSlice.actions;
export default productsSlice.reducer;
