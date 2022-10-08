/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import fetchAllbeers from "../service/beerApi";
import {
  API_ERROR,
  FETCH_STATUS_ERROR,
  FETCH_STATUS_LOADING,
  FETCH_STATUS_SUCCESS,
} from "../utils/constants";

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
        state.fetchStatus = FETCH_STATUS_SUCCESS;
      })
      .addCase(fetchAllbeers.pending, (state) => {
        state.fetchStatus = FETCH_STATUS_LOADING;
        state.error = {};
      })
      .addCase(fetchAllbeers.rejected, (state, action) => {
        if (action.error.name === "AbortError") {
          state.fetchStatus = "aborterror";
        } else {
          state.fetchStatus = FETCH_STATUS_ERROR;
        }
        state.error = { type: API_ERROR, payload: action.payload };
      });
  },
});

export default beerSlice;
