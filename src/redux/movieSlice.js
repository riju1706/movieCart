import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "MOVIEDETAILS",
  initialState: {},
  reducers: {
    addMovie(state, action) {
      return action.payload;
    },
  },
});
export const movieReducer = movieSlice.reducer;
export const { addMovie } = movieSlice.actions;
