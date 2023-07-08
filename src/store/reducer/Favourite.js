import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const FavouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      state.items.push(action.payload);
    },
    deleteFavourite: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    incrementQuantityFavourite: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity = (item.quantity || 0) + 1;
        item.price = (item.price || 0) + item.price;
      }
    },
    decrementQuantityFavourite: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity = (item.quantity || 0) - 1;
        item.price = (item.price || 0) - item.price;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavourite, deleteFavourite, incrementQuantityFavourite, decrementQuantityFavourite } =FavouriteSlice.actions;

export default FavouriteSlice.reducer;
