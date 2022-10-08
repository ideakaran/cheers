import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_FETCH_ALL_BEERS } from "../utils/constants";

const fetchAllbeers = createAsyncThunk(
  ACTION_FETCH_ALL_BEERS,
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

export default fetchAllbeers;
