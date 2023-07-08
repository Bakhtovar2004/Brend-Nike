import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    deleteCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity = (item.quantity || 0) + 1;
        item.price = (item.price || 0) + item.price;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity = item.quantity - 1;
        item.price = item.price - item.price;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteCart, incrementQuantity, decrementQuantity } =CartSlice.actions;

export default CartSlice.reducer;
