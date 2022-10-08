import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchAllbeers = createAsyncThunk(
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

export default fetchAllbeers;
