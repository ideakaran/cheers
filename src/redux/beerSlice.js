/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllbeers = createAsyncThunk(
  "fetch-all-beers",
  async (apiUrl, thunkAPI) => {
    try {
      const apiResponse = await fetch(apiUrl);
      const jsonResponse = await apiResponse.json();
      if (!apiResponse.ok) {
        return thunkAPI.rejectWithValue(jsonResponse);
      }
      return thunkAPI.fulfillWithValue(jsonResponse);
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  },
);

const beerSlice = createSlice({
  name: "beers",
  initialState: { beers: [], fetchStatus: "", error: {} },
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
        state.error = action?.payload;
      });
  },
});

export default beerSlice;
