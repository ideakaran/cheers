/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import fetchAllbeers from "../service/beerApi";

export const initialState = {
  beers: [],
  fetchStatus: "",
  error: {},
};

const beerSlice = createSlice({
  name: "beers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllbeers.fulfilled, (state, action) => {
        state.beers = [...state.beers, ...action.payload];
        state.error = {};
        state.fetchStatus = "success";
      })
      .addCase(fetchAllbeers.pending, (state) => {
        state.fetchStatus = "loading";
        state.error = {};
      })
      .addCase(fetchAllbeers.rejected, (state, action) => {
        if (action.error.name === "AbortError") {
          state.fetchStatus = "aborterror";
        } else {
          state.fetchStatus = "error";
        }
        state.error = { type: "API_ERROR", payload: action.payload };
      });
  },
});

export default beerSlice;
