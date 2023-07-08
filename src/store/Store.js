import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./reducer/Cart";
import { FavouriteSlice } from "./reducer/Favourite";
import { ProductAbout } from "./reducer/ProductAbout";

export const Store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    favourite: FavouriteSlice.reducer,
    productAbout: ProductAbout.reducer,
  },
});
