import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./movieSlice";

export const storage = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
