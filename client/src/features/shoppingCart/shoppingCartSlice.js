import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCartSettings: {
    orderedItems: [],
    totalPrice: null,
    disabledButtons: [],
    isModalOrderPlacement: false,
    isOrderConfirmModalOpen: false,
  },
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItem: {
      reducer(state, action) {
        const item = action.payload;
        state.shoppingCartSettings.orderedItems.push(item);
      },
    },
    removeItem: {
      reducer(state, action) {
        const id = action.payload;
        const updatedItems = state.shoppingCartSettings.orderedItems.filter(
          item => item._id !== id
        );
        state.shoppingCartSettings.orderedItems = updatedItems;
      },
    },
    addDisabledButton: {
      reducer(state, action) {
        const disabledButton = action.payload;
        if (
          !state.shoppingCartSettings.disabledButtons.includes(disabledButton)
        ) {
          state.shoppingCartSettings.disabledButtons.push(disabledButton);
        }
      },
    },
    enableButton: {
      reducer(state, action) {
        const id = action.payload;
        const updatedButtons =
          state.shoppingCartSettings.disabledButtons.filter(
            buttonId => buttonId !== id
          );
        state.shoppingCartSettings.disabledButtons = updatedButtons;
      },
    },
    changeAmount: {
      reducer(state, action) {
        const { id, newAmount } = action.payload;
        const updatedItems = state.shoppingCartSettings.orderedItems.map(
          item => {
            if (item._id === id) {
              return { ...item, amount: newAmount };
            }
            return item;
          }
        );
        state.shoppingCartSettings.orderedItems = updatedItems;
      },
    },
    changeIsModalOrderPlacement: {
      reducer(state, action) {
        state.shoppingCartSettings.isModalOrderPlacement = action.payload;
      },
    },
    resetSettings: {
      reducer(state) {
        state.shoppingCartSettings.orderedItems = [];
        state.shoppingCartSettings.disabledButtons = [];
        state.shoppingCartSettings.totalPrice = null;
      },
    },
    setTotalPrice: {
      reducer(state, action) {
        state.shoppingCartSettings.totalPrice = action.payload;
      },
    },
    changeIsOrderConfirmModalOpen: {
      reducer(state, action) {
        state.shoppingCartSettings.isOrderConfirmModalOpen = action.payload;
      },
    },
  },
});

export const {
  addItem,
  removeItem,
  addDisabledButton,
  enableButton,
  changeAmount,
  changeIsModalOrderPlacement,
  resetSettings,
  setTotalPrice,
  changeIsOrderConfirmModalOpen,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
