import { configureStore } from "@reduxjs/toolkit";
import beerSlice from "./beerSlice";

const store = configureStore({
  reducer: {
    beers: beerSlice.reducer,
  },
});

export default store;
